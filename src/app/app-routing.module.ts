import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LinkshortComponent } from './pages/linkshort/linkshort.component';
import { DescriptionComponent } from './pages/description/description.component';
import { SummuryComponent } from './pages/summury/summury.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './shared/guards/auth.guard';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'linkshort', component: LinkshortComponent },
  { path: 'description', canActivate: [AuthGuard], component: DescriptionComponent},
  { path: 'summury', component: SummuryComponent},

  { path: 'auth', component: AuthComponent}



];
@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule.forRoot(routes)
  ],
 exports: [
  RouterModule
 ]
})
export class AppRoutingModule { }
