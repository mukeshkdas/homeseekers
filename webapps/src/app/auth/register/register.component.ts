import { Component, OnInit } from '@angular/core';
import { RegisterFormService } from "./register-form.service";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [
    RegisterFormService
  ]
})
export class RegisterComponent implements OnInit {

  get form(): FormGroup {
    return this.registerFormService.form;
  }

  constructor(private registerFormService: RegisterFormService) { }

  ngOnInit() {
  }

  submitForm() {
    if (this.form.valid) {
      console.log("submit form called");
      // Save user 
      // Show error message
      // redirect to home page
      // other things
    }
  }
}
