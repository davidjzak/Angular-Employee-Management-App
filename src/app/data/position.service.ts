import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Position } from "../position";

@Injectable({
  providedIn: "root"
})
export class PositionService {
  constructor(private http: HttpClient) {}

  getPositions(): Observable<Position[]> {
    return this.http.get<Position[]>(
      "http://pure-citadel-90161.herokuapp.com" + "/positions"
    );
  }
}
