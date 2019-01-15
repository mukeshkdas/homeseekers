import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

import { environment } from "@env/environment";
import { User, JwtService, UserService } from "@app/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService
  ) {}

  
}
