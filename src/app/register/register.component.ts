import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  username: string = "";
  email: string = "";
  password: string = "";
  isUsernameValid: boolean = true;
  error: any = null;

  constructor() {}

  ngOnInit(): void {}

  // validating username
  validateUsername(): void {
    const pattern = RegExp(/^[\w-.]*$/);
    if (pattern.test(this.username)) {
      this.isUsernameValid = true;
    } else {
      this.isUsernameValid = false;
    }
  }

  onKey(event: any, type: string) {
    if (type === "username") {
      this.username = event.target.value;
      this.validateUsername();
    } else if (type === "password") {
      this.password = event.target.value;
    }
  }
}
