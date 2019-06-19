import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA,Injector } from '@angular/core';
import {RouterModule, Router} from '@angular/router';
import { AppComponent } from './app.component';
import {UpgradeModule,downgradeComponent} from '@angular/upgrade/static';
import { WindowRef } from './app.window-ref';
import { createCustomElement } from '@angular/elements'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [WindowRef],
  bootstrap: [],
  entryComponents:[AppComponent]
})
export class AppModule {
  constructor(private injector:Injector) {
   
  }
  public  ngDoBootstrap() {
    const clientManagerCustomElement = createCustomElement(AppComponent, { injector: this.injector})
    if(!customElements.get('firm-manager'))
      customElements.define('firm-manager', clientManagerCustomElement);
  }
 }
