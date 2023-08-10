import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { HomeloginComponent } from './pages/homelogin/homelogin.component';

const routes: Routes = [
  {
    path:'', component: ContentComponent,

    children:[
      {
        path:'', component: HomeloginComponent,

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
