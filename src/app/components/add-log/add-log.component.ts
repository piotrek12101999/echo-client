import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { IViewLog } from "src/app/models/logs.model";
import { DataService } from "../../services/data/data.service";

@Component({
  selector: "app-add-log",
  templateUrl: "./add-log.component.html",
  styleUrls: ["./add-log.component.scss"],
})
export class AddLogComponent implements OnInit {
  logForm: FormGroup;
  logs: IViewLog[] = [];

  constructor(private _dataService: DataService) {}

  get name() {
    return this.logForm.get("name");
  }

  get message() {
    return this.logForm.get("message");
  }

  ngOnInit() {
    this.logForm = new FormGroup({
      name: new FormControl("", [
        Validators.required,
        Validators.maxLength(30),
      ]),
      message: new FormControl("", [
        Validators.required,
        Validators.maxLength(100),
      ]),
    });
  }

  onSubmit() {
    this.logs.push({
      ...this.logForm.value,
      _id: Math.random(),
      origin: "client",
    });
    this._dataService
      .addLog(this.logForm.value)
      .subscribe((log) => this.logs.push({ ...log, origin: "server" }));
    this.logForm.reset();
  }
}
