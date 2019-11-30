import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../data/employee.service";
import { Employee } from "../employee";
import { Router } from "@angular/router";

@Component({
  selector: "app-employees",
  templateUrl: "./employees.component.html",
  styleUrls: ["./employees.component.scss"]
})
export class EmployeesComponent implements OnInit {
  private getEmployeesSub;
  employees: Employee[];
  private loadingError: boolean = false;
  filteredEmployees: Employee[];

  constructor(private emp: EmployeeService, private router: Router) {}

  ngOnInit() {
    this.getEmployeesSub = this.emp.getEmployees().subscribe(
      employees => {
        this.employees = employees;
        this.filteredEmployees = employees;
      }, //by default display all employee if they type filter
      function(err) {
        this.loadingError = true;
      }
    );
  }

  onEmployeeSearchKeyUP(event: any) {
    let substring: string = event.target.value.toLowerCase();
    this.filteredEmployees = this.employees.filter(
      em =>
        em.Position["PositionName"].toLowerCase().indexOf(substring) != -1 ||
        em.FirstName.toLowerCase().indexOf(substring) != -1 ||
        em.LastName.toLowerCase().indexOf(substring) != -1
    );
  }

  routeEmployee(id: string) {
    this.router.navigate(["/employee/", id]);
  }

  ngOnDestroy() {
    if (this.getEmployeesSub != "undefined") {
      this.getEmployeesSub.unsubscribe();
    }
  }
}
