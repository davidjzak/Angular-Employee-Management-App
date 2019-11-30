import { Component, OnInit, OnDestroy } from "@angular/core";
import { PositionService } from "../data/position.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-position",
  templateUrl: "./position.component.html",
  styleUrls: ["./position.component.scss"]
})
export class PositionComponent implements OnInit, OnDestroy {
  private paramSubscription: any;
  private positionSubscription: any;
  private savePositionSubscription: any;
  position;
  successMessage = false;
  failMessage = false;

  constructor(
    private positionService: PositionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.paramSubscription = this.route.params.subscribe(params => {
      this.positionSubscription = this.positionService
        .getPosition(params["_id"])
        .subscribe(pos => {
          this.position = pos[0];
        });
    });
  }

  onSubmit() {
    this.savePositionSubscription = this.positionService
      .savePosition(this.position)
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
    if (this.positionSubscription) {
      this.positionSubscription.unsubscribe();
    }
    if (this.savePositionSubscription) {
      this.savePositionSubscription.unsubscribe();
    }
    if (this.paramSubscription) {
      this.paramSubscription.unsubscribe();
    }
  }
}
