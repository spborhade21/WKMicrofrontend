import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReturnManagerComponent } from './return-manager/return-manager.component';
import { BlankComponent } from './blank/blank.component';

const routes: Routes = [
  {path:'tax/returnManager',component:ReturnManagerComponent},
  {path:'**',component:BlankComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
