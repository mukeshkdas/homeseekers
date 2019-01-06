import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

import { AuthComponent, LoginComponent, RegisterComponent } from './auth';
// import { HomeComponent } from './home';
// import { LoginComponent } from './login';
// import { RegisterComponent } from './register';
// import { ContactUsComponent } from './contact-us';
// import { DashboardComponent } from './dashboard';
// import { ListingsComponent } from './listings';

const routes: Routes = [
  // { 
  //   path: '', 
  //   redirectTo: '/home', 
  //   pathMatch: 'full' 
  // },
  {
    path: 'register', component: RegisterComponent    
  },
  {
    path: 'login', component: LoginComponent    
  }, 
  // { 
  //   path: 'dashboard', 
  //   component: DashboardComponent 
  // },
  // { 
  //   path: 'login', 
  //   component: LoginComponent 
  // },
  // { 
  //   path: 'register', 
  //   component: RegisterComponent 
  // },
  // { 
  //   path: 'contact-us', 
  //   component: ContactUsComponent 
  // },
  // { 
  //   path: 'listings', 
  //   component: ListingsComponent 
  // },
  // { 
  //   path: '**', 
  //   component: HomeComponent 
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preload all modules; optionally we could
    // implement a custom preloading strategy for just some
    // of the modules (PRs welcome 😉)
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
