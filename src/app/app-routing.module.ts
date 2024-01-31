import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PagesComponent } from './pages/pages.component';
import { BlogComponent } from './blog/blog.component';
import { AllCourseComponent } from './all-course/all-course.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'all-courses',component:AllCourseComponent},
  {path:'page',component:PagesComponent},
  {path:'blog',component:BlogComponent},
  {path:'contact',component:ContactComponent}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
