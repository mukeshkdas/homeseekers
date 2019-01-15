import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";

import { UserService, JwtService, AuthService, Errors } from "@app/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private jwtService: JwtService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() { }
}
