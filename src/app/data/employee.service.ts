import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Employee } from "../employee";
import { EmployeeRaw } from "./employeeRaw";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(
      "https://pure-citadel-90161.herokuapp.com" + "/employees"
    );
  }

  saveEmployee(employee: EmployeeRaw) {
    return this.http.put<any>(
      "https://pure-citadel-90161.herokuapp.com" + employee._id,
      employee
    );
  }

  getEmployee(id: number): Observable<EmployeeRaw[]> {
    return this.http.get<EmployeeRaw[]>(
      "https://pure-citadel-90161.herokuapp.com/employee-raw/" + id
    );
  }
}
