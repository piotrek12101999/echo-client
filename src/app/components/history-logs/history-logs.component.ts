import { Component } from "@angular/core";
import { DataService } from "../../services/data/data.service";
import { IViewLog } from "src/app/models/logs.model";
import { map } from "rxjs/operators";

@Component({
  selector: "app-history-logs",
  templateUrl: "./history-logs.component.html",
  styleUrls: ["./history-logs.component.scss"],
})
export class HistoryLogsComponent {
  name = "";
  logs: IViewLog[] = [];

  constructor(private _dataService: DataService) {}

  searchForLogs() {
    this.logs = [];
    this._dataService
      .getLogs(this.name)
      .pipe(
        map((logs) =>
          logs.map<IViewLog>((log) => ({ ...log, origin: "server" }))
        )
      )
      .subscribe((logs) => (this.logs = logs));
    this.name = "";
  }
}
