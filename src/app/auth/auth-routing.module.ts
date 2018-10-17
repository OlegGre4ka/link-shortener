import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';

const routesAuth: Routes = [
  { path: '', component: AuthComponent , children: [
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent},
  ]},
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routesAuth)
  ],
 exports: [
  RouterModule
 ]
})
export class AuthRoutingModule { }
