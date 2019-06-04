import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Injector, CUSTOM_ELEMENTS_SCHEMA, OnInit, DoBootstrap, ApplicationRef  } from '@angular/core';
import { createCustomElement } from '@angular/elements'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientManagerComponent } from './client-manager/client-manager.component';
import { BlankComponent } from './blank/blank.component';
import { Router } from '@angular/router';
import { GridFilterPipe } from './core/filters/grid-filter.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ClientManagerComponent,
    BlankComponent,
    GridFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [],
  entryComponents:[AppComponent]
})
export class AppModule implements DoBootstrap{
  constructor(private injector:Injector,private router: Router) {
   
  }
 
  public  ngDoBootstrap(app: ApplicationRef) {
    const clientManagerCustomElement = createCustomElement(AppComponent, { injector: this.injector})
    if(!customElements.get('client-manager'))
      customElements.define('client-manager', clientManagerCustomElement);
  }
 }
