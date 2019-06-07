import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientManagerComponent } from './client-manager/client-manager.component';
import { BlankComponent } from './blank/blank.component';

const routes: Routes = [
  {path:'axcess-modules/client-manager',component:ClientManagerComponent},
  {path:'**',component:BlankComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
