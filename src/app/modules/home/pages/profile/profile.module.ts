import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { HomeprofileComponent } from './pages/homeprofile/homeprofile.component';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    HomeprofileComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule { }
