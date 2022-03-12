import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'reactive-forms',component:FormComponent},
  {path:'about',component:AboutComponent},
  {path:'twowaybinding',component:TwowaybindingComponent},
  {path:'redirect',redirectTo:'/about',pathMatch:'full'},
  {path:'absdf',redirectTo:'/about',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}, //Wild card path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
