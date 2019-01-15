import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { User } from '@app/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // post user
  public register(user : User) : Observable<User>{
    return this.http.post<User>(environment.apiBaseUrl +'/register', user);
  }

  // Function to check if mobile is taken
  public checkMobileAvailable(mobile) {
    return this.http.get<any>(environment.apiBaseUrl +'/checkMobileAvailable/' + mobile);
  }

  // Function to check if e-mail is taken
  checkEmailAvailable(email) {
    return this.http.get<any>(environment.apiBaseUrl +'/checkEmailAvailable/' + email);
  }
}
