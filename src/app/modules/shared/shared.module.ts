import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    TranslateModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    TranslateModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
