import { Component, OnInit } from '@angular/core';

import { LoginFormService } from './login-form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ LoginFormService ]
})
export class LoginComponent implements OnInit {

  constructor(private loginFormService : LoginFormService) { }

  ngOnInit() {
  }

}
