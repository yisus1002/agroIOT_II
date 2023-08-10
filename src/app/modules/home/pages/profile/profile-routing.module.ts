import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { HomeprofileComponent } from './pages/homeprofile/homeprofile.component';

const routes: Routes = [
  {
    path:'', component: ContentComponent,

    children:[
      {
        path:'', component: HomeprofileComponent,

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
