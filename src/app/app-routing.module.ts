import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeptComponent } from './dept/dept.component';
import { LibComponent } from './lib/lib.component';
import { SportsComponent } from './sports/sports.component';
import { EceComponent } from './dept/ece/ece.component';
import { MechComponent } from './dept/mech/mech.component';

const routes: Routes = [
  {path:"dept",component:DeptComponent, children:[{path:"ece", component:EceComponent},{path:"mech", component:MechComponent}]},
  {path:"lib",component:LibComponent},
  {path:"sports",component:SportsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
