import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AddLogComponent } from "./components/add-log/add-log.component";
import { DisplayLogsComponent } from "./components/display-logs/display-logs.component";

const routes: Routes = [
  { path: "", component: AddLogComponent },
  { path: "history", component: DisplayLogsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
