import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../data/employee.service";
import { Employee } from "../employee";

@Component({
  selector: "app-employees",
  templateUrl: "./employees.component.html",
  styleUrls: ["./employees.component.scss"]
})
export class EmployeesComponent implements OnInit {
  private getEmployeesSub;
  employees: Employee[];
  private loadingError: boolean = false;

  constructor(private emp: EmployeeService) {}

  ngOnInit() {
    this.getEmployeesSub = this.emp.getEmployees().subscribe(
      employees => (this.employees = employees),
      function(err) {
        this.loadingError = true;
      }
    );
  }

  ngOnDestroy() {
    if (this.getEmployeesSub != "undefined") {
      this.getEmployeesSub.unsubscribe();
    }
  }
}
