import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { HomeLandingComponent } from './pages/home-landing/home-landing.component';

const routes: Routes = [
  {
    path:'', component: ContentComponent,

    children:[
      {
        path:'', component: HomeLandingComponent,

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
