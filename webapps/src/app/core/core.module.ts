import { AuthService } from './services/auth.service';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { JwtService, UserService } from "@app/core";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [JwtService, UserService, AuthService]
})
export class CoreModule { }
