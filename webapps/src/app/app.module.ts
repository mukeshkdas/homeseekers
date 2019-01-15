// built-in module
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
//import { FlexLayoutModule } from "@angular/flex-layout";
//import { HttpClientModule } from '@angular/common/http';
// Need to remove below import on creating the feature auth module
//import { FormsModule } from "@angular/forms";
//import { ReactiveFormsModule } from "@angular/forms";
// custom modules
import { AppRoutingModule } from "@app/app-routing.module";
//import { MaterialModule } from "./material.module";
import { SharedModule } from "@app/shared";
import { CoreModule } from "@app/core";
import { HomeModule } from "@app/home";
import { AuthModule } from "@app/auth";
// components
import { AppComponent } from "./app.component";
import { FooterComponent, HeaderComponent } from "@app/shared";

@NgModule({ 
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // FormsModule,
    // ReactiveFormsModule,
    // HttpClientModule,
    // FlexLayoutModule,
    // MaterialModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    AuthModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
