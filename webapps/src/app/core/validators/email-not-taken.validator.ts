import { Injectable } from "@angular/core";
import { AsyncValidatorFn, AbstractControl } from "@angular/forms";
import { UserService } from "./../services/user.service";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class EmailNotTakenValidator {
  constructor(public userService: UserService) {}

  emailNotTaken(): AsyncValidatorFn {
    return (control: AbstractControl) => {
      console.log("email " + control.value);
      return this.userService.checkEmailAvailable(control.value).pipe(
        map(res => {
          console.log("email available " + res.emailAvailable);
          return res.emailAvailable ? null : { emailTaken: true };
        })
      );
    };
  }
}
