import { Component } from "@angular/core";
import { LogComponent } from "../log/log.component";
import { DataService } from "../../services/data/data.service";
import { IDBLog } from "src/app/models/logs.model";

@Component({
  selector: "app-display-logs",
  templateUrl: "./display-logs.component.html",
  styleUrls: ["./display-logs.component.sass"],
})
export class DisplayLogsComponent {
  logs: IDBLog[];
  name = "";

  constructor(private _dataService: DataService) {}

  searchLogs() {
    this._dataService.getLogs(this.name).subscribe((logs) => {
      this.name = "";
      this.logs = logs;
    });
  }
}
