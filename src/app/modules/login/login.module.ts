import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { ContentComponent } from './content/content.component';
import { HomeloginComponent } from './pages/homelogin/homelogin.component';


@NgModule({
  declarations: [
    ContentComponent,
    HomeloginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
