import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AddLogComponent } from "./components/add-log/add-log.component";
import { HistoryLogsComponent } from "./components/history-logs/history-logs.component";

const routes: Routes = [
  { path: "", component: AddLogComponent },
  { path: "history", component: HistoryLogsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
