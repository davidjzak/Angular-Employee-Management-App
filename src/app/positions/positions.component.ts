import { Component, OnInit } from "@angular/core";
import { PositionService } from "../data/position.service";
import { Position } from "../position";

@Component({
  selector: "app-positions",
  templateUrl: "./positions.component.html",
  styleUrls: ["./positions.component.scss"]
})
export class PositionsComponent implements OnInit {
  positions: Position[];
  private loadingError: boolean = false;
  private getPositionSub;
  constructor(private p: PositionService) {}

  ngOnInit() {
    this.getPositionSub = this.p.getPositions().subscribe(
      positions => (this.positions = positions),
      function(err) {
        this.loadingError = true;
      }
    );
  }

  ngOnDestroy() {
    console.log(this.getPositionSub);
    if (this.getPositionSub != "undefined") {
      this.getPositionSub.unsubscribe();
    }
  }
}
