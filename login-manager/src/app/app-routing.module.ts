import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { BlankComponent } from './blank/blank.component';

const routes: Routes = [
  {path:"login/signin",component:SignInComponent},
  {path:"**",component:BlankComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
