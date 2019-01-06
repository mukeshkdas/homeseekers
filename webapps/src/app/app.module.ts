// built-in module
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";

// Need to remove below import on creating the feature auth module
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

// custom modules
import { MaterialModule } from "./material.module";
import { HomeModule } from './home';
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from './shared';
// components
import { AppComponent } from "./app.component";
import { FooterComponent, HeaderComponent } from './shared';
import { AuthComponent, LoginComponent, RegisterComponent } from './auth';
// import { HomeComponent } from './home';
// import { ToolbarComponent } from './toolbar';
// import { LoginComponent } from './login';
// import { RegisterComponent } from './register';
// import { ContactUsComponent } from './contact-us';
// import { DashboardComponent } from './dashboard';
// import { ListingsComponent } from './listings';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // ToolbarComponent,
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    // ContactUsComponent,
    // DashboardComponent,
    // ListingsComponent,
    HeaderComponent,
    FooterComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,    
    AppRoutingModule,
    SharedModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}