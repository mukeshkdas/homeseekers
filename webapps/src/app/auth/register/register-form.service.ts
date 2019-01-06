import { Injectable } from "@angular/core";

//import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
//import { ActivatedRoute, Router } from '@angular/router';

import { UserService, JwtService } from "../../core/services";

@Injectable({
  providedIn: "root"
})
export class RegisterFormService {
  public isSubmitting = false;
  public form: FormGroup;

  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private formBuilder: FormBuilder
  ) {
    this.createRegistrationForm();
  }

  private createRegistrationForm() {
    this.form = this.formBuilder.group({
      fullName: [null, Validators.required],
      mobile: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }
}
