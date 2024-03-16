import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Venasoft1Component } from './venasoft1/venasoft1.component';
import { Venasoft2Component } from './venasoft2/venasoft2.component';

const routes: Routes = [

  {path:'' , pathMatch:'full' , redirectTo:'home'},
  {path:'home' , component:HomeComponent},
  {path:'venasoft1' , component:Venasoft1Component},
  {path:'venasoft2' , component:Venasoft2Component},



];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
