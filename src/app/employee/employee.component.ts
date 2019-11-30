import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EmployeeService } from "../data/employee.service";
import { PositionService } from "../data/position.service";
import { EmployeeRaw } from "../data/employeeRaw";
import { Position } from "../data/position";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.scss"]
})
export class EmployeeComponent implements OnInit {
  paramSubScription: any;
  employeeSubscription: any;
  getPositionsSubcription: any;
  getPositionsSub: any;
  saveEmployeeSubscription: any;
  employee: EmployeeRaw;
  positions: Position[];
  successMessage = false;
  failMessage = false;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private positionService: PositionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.paramSubScription = this.route.params.subscribe(params => {
      this.employeeSubscription = this.employeeService
        .getEmployee(params["_id"])
        .subscribe(emp => {
          this.employee = emp[0];

          this.getPositionsSub = this.positionService
            .getPositions()
            .subscribe(data => {
              this.positions = data;
            });
        });
    });
  }

  onSubmit() {
    this.saveEmployeeSubscription = this.employeeService
      .saveEmployee(this.employee)
      .subscribe(
        () => {
          this.successMessage = true;

          setTimeout(() => {
            this.successMessage = false;
          }, 2500);
        },
        () => {
          this.failMessage = true;
          setTimeout(() => {
            this.failMessage = false;
          }, 2500);
        }
      );
  }

  ngOnDestroy() {
    if (this.employeeSubscription) {
      this.employeeSubscription.unsubscribe();
    }
    if (this.getPositionsSub) {
      this.getPositionsSub.unsubscribe();
    }
    if (this.paramSubScription) {
      this.paramSubScription.unsubscribe();
    }
    if (this.saveEmployeeSubscription) {
      this.saveEmployeeSubscription.unsubscribe();
    }
  }
}
