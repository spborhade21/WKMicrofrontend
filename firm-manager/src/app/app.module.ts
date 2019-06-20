import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA,Injector } from '@angular/core';
import {RouterModule, Router} from '@angular/router';
import { AppComponent } from './app.component';
import {UpgradeModule,downgradeComponent} from '@angular/upgrade/static';
import { WindowRef } from './app.window-ref';
import { createCustomElement } from '@angular/elements'; 
import { BlankComponent } from './blank/blank.component';
import { AngularJsContainerComponent } from './angular-js-container/angular-js-container.component';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BlankComponent,
    AngularJsContainerComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'axcess-modules/firm-manager',component:AngularJsContainerComponent},
      {path:'**',component:BlankComponent}
    ],{useHash:true,initialNavigation:true})
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [WindowRef],
  bootstrap: [AppComponent],
  entryComponents:[AppComponent]
})
export class AppModule {
  constructor(private injector:Injector) {
   
  }
  // public  ngDoBootstrap() {
  //   const firmManagerCustomElement = createCustomElement(AppComponent, { injector: this.injector})
  //   if(!customElements.get('firm-manager'))
  //     customElements.define('firm-manager', firmManagerCustomElement);
  // }
 }
