import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
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
