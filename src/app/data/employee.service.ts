import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Employee } from "../employee";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(
      "http://pure-citadel-90161.herokuapp.com" + "/employees"
    );
  }
}
