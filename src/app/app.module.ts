import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DisplayLogsComponent } from "./components/display-logs/display-logs.component";
import { AddLogComponent } from "./components/add-log/add-log.component";
import { LogComponent } from "./components/display-logs/log/log.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { HistoryLogsComponent } from "./components/history-logs/history-logs.component";
import { InputComponent } from "./components/add-log/input/input.component";

@NgModule({
  declarations: [
    AppComponent,
    DisplayLogsComponent,
    AddLogComponent,
    LogComponent,
    HistoryLogsComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
