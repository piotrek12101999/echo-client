import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
})
export class InputComponent {
  @Input() formGroup: FormGroup;
  @Input() id: string;
  @Input() placeholder: string;
  @Input() error?: boolean;
  @Input() errorMessage?: string;
  @Input() required?: boolean;

  constructor() {}
}
