import { Component, OnInit } from "@angular/core";
import { AddLogComponent } from "./components/add-log/add-log.component";
import { DisplayLogsComponent } from "./components/display-logs/display-logs.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"],
})
export class AppComponent implements OnInit {
  title = "client";

  ngOnInit() {
    // axios
    //   .post("http://localhost:3000/logs", {
    //     name: "piotr",
    //     message: "messsage",
    //   })
    //   .then((response) => console.log(response));
  }
}
