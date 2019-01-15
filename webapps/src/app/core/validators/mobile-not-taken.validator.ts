import { Injectable } from "@angular/core";
import { AsyncValidatorFn, AbstractControl } from "@angular/forms";
import { UserService } from "./../services/user.service";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class MobileNotTakenValidator {
  constructor(public userService: UserService) {}

  mobileNotTaken(): AsyncValidatorFn {
    return (control: AbstractControl) => {
      return this.userService.checkMobileAvailable(control.value).pipe(
        map(res => {
          console.log("mobile available " + res.mobileAvailable);
          return res.mobileAvailable ? null : { mobileTaken: true };
        })
      );
    };
  }
}
