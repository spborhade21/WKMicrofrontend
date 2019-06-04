import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoBarComponent } from './components/logo-bar/logo-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { IdentityService } from './services/identity/identity.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { VerticalMenuListComponent } from './components/vertical-menu-list/vertical-menu-list.component';

@NgModule({
  declarations: [LogoBarComponent, NavBarComponent, VerticalMenuListComponent],
  imports: [
    NgbModule,
    CommonModule
  ],
  providers:[IdentityService],
  exports:[LogoBarComponent, NavBarComponent,VerticalMenuListComponent]
})
export class CoreModule { }
