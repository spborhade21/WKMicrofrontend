import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentManagerComponent } from './document-manager/document-manager.component';
import { BlankComponent } from './blank/blank.component';

const routes: Routes = [
  {path:'document/documentManager',component:DocumentManagerComponent},
  {path:'**',component:BlankComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
