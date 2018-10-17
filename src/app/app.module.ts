import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { LinkshortComponent } from './pages/linkshort/linkshort.component';
import { DescriptionComponent } from './pages/description/description.component';
import { SummuryComponent } from './pages/summury/summury.component';
@NgModule({
  declarations: [
    AppComponent,
    LinkshortComponent,
    DescriptionComponent,
    SummuryComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
