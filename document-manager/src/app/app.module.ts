import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Injector, CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, ApplicationRef  } from '@angular/core';
import { createCustomElement } from '@angular/elements'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentManagerComponent } from './document-manager/document-manager.component';
import { BlankComponent } from './blank/blank.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DocumentManagerComponent,
    BlankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [],
  entryComponents:[AppComponent]
})
export class AppModule {
  constructor(private injector:Injector) {
    
  }
  ngDoBootstrap() {
    
    const docuemntManagerCustomElement = createCustomElement(AppComponent, { injector: this.injector})
    if(!customElements.get('document-manager'))
      customElements.define('document-manager', docuemntManagerCustomElement);

  }
 }
