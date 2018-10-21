import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LinkshortComponent } from './pages/linkshort/linkshort.component';
import { DescriptionComponent } from './pages/description/description.component';
import { SummuryComponent } from './pages/summury/summury.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { AuthComponent } from './auth/auth.component';

import { DescriptionGuard } from './shared/guards/description.guard';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ListShortComponent } from './pages/list-short/list-short.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'linkshort', component: LinkshortComponent },
  { path: 'list-short', component: ListShortComponent },
  { path: 'description', canActivate: [DescriptionGuard], component: DescriptionComponent},
  { path: 'summury', component: SummuryComponent},

  { path: 'auth', component: AuthComponent},
  { path: '**', component: NotFoundComponent}




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
