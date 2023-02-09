import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { DistrictpageComponent } from './pages/districtpage/districtpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SignuppageComponent } from './pages/signuppage/signuppage.component';

const routes: Routes = [
  {
    path:'Home',component:HomepageComponent
  },
  {
    path:'Districts',component:DistrictpageComponent
  },
  {
    path:'Contact',component:ContactpageComponent
  },
  {
    path:'SignUP',component:SignuppageComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
