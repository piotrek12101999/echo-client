import { Component, Input } from "@angular/core";
import { IDBLog } from "src/app/models/logs.model";

@Component({
  selector: "app-log",
  templateUrl: "./log.component.html",
  styleUrls: ["./log.component.sass"],
})
export class LogComponent {
  @Input() log: IDBLog;

  constructor() {}
}
