import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import {
  UserService,
  JwtService,
  AuthService,
  Errors,
  EmailNotTakenValidator,
  MobileNotTakenValidator
} from "@app/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],  
})
export class RegisterComponent implements OnInit {
  public registratonForm: FormGroup;
  public isSubmitting = false;
  errors: Errors = {errors: {}};

  // Regex for pattern validation
  readonly NAME_REGEX = /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/;
  readonly EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  readonly MOBILE_REGEX = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/;
  readonly PASSWORD_REGEX = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/;

  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private jwtService: JwtService,
    private formBuilder: FormBuilder,
    private emailNotTakenValidator: EmailNotTakenValidator,
    private mobileNotTakenValidator: MobileNotTakenValidator
  ) {
    this.createRegistrationForm();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registratonForm.controls;
  }

  ngOnInit() { }

  onRegisterSubmit() {
    // stop here if form is invalid
    if (this.registratonForm.valid) {
      this.isSubmitting = true;
      this.errors = {errors: {}};
      this.userService.register(this.registratonForm.value).subscribe(
        data => {
          setTimeout(() => this.router.navigateByUrl('/'), 4000);  
        },
        err => {
          this.errors = err;
          this.isSubmitting = false;
          // if (err.status === 422) {
          //   this.errors = err;
          // }
          // else {
          //   this.errors = err; // "Something went wrong."
          // }
        }
      );
    }
  }

  // form created using Form Group
  createRegistrationForm() {
    this.registratonForm = new FormGroup(
      {
        name: new FormControl(null, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30)
          //Validators.pattern(this.NAME_REGEX)
        ]),
        email: new FormControl(null, {
          validators: [
            Validators.required,
            //Validators.email,
            Validators.minLength(6),
            Validators.maxLength(30),
            Validators.pattern(this.EMAIL_REGEX)
          ],
          asyncValidators: [this.emailNotTakenValidator.emailNotTaken()]
          //updateOn: "blur"
        }),
        mobile: new FormControl(null, {
          validators: [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10),
            Validators.pattern(this.MOBILE_REGEX)
          ],
          asyncValidators: [this.mobileNotTakenValidator.mobileNotTaken()]
          //updateOn: "blur"
        }),
        password: new FormControl(null, {
          validators: [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(15),
            Validators.pattern(this.PASSWORD_REGEX)
          ]
          //updateOn: "blur"
        })
      },
      { updateOn: "blur" }
    );
  }

  // create register form using form builder
  // createRegistrationForm() {
  //   this.registratonForm = this.formBuilder.group({
  //     name: [
  //       null,
  //       [
  //         Validators.required,
  //         Validators.minLength(3),
  //         Validators.maxLength(30),
  //         //Validators.pattern(this.NAME_REGEX)
  //       ]
  //     ],
  //     email: [
  //       null,
  //       [
  //         Validators.required,
  //         //Validators.email,
  //         Validators.minLength(6),
  //         Validators.maxLength(30),
  //         Validators.pattern(this.EMAIL_REGEX),
  //       ],
  //       [
  //         this.emailNotTakenValidator.emailNotTaken(),
  //       ]
  //     ],
  //     mobile: [
  //       null,
  //       [
  //         Validators.required,
  //         Validators.minLength(10),
  //         Validators.maxLength(10),
  //         Validators.pattern(this.MOBILE_REGEX)
  //       ],
  //       [
  //         this.mobileNotTakenValidator.mobileNotTaken()
  //       ]
  //     ],
  //     password: [
  //       null,
  //       [
  //         Validators.required,
  //         Validators.minLength(6),
  //         Validators.maxLength(15),
  //         Validators.pattern(this.PASSWORD_REGEX)
  //       ]
  //     ]
  //   });
  // }


}
