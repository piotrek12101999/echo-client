import { Component, Input } from "@angular/core";
import { IViewLog } from "src/app/models/logs.model";

@Component({
  selector: "app-log",
  templateUrl: "./log.component.html",
  styleUrls: ["./log.component.scss"],
})
export class LogComponent {
  @Input() log: IViewLog;

  constructor() {}
}
