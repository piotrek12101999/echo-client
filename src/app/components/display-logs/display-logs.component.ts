import { Component, Input } from "@angular/core";
import { IViewLog } from "src/app/models/logs.model";

@Component({
  selector: "app-display-logs",
  templateUrl: "./display-logs.component.html",
  styleUrls: ["./display-logs.component.scss"],
})
export class DisplayLogsComponent {
  @Input() logs: IViewLog[] = [];
  constructor() {}
}
