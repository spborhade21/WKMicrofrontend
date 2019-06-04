import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Injector, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { createCustomElement } from '@angular/elements'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReturnManagerComponent } from './return-manager/return-manager.component';
import { BlankComponent } from './blank/blank.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ReturnManagerComponent,
    BlankComponent
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
  entryComponents:[AppComponent,ReturnManagerComponent]
})
export class AppModule { 
  constructor(private injector:Injector) {
    
  }
  ngDoBootstrap() {
    const taxManagerCustomElement = createCustomElement(AppComponent, { injector: this.injector})
    if(!customElements.get('tax-manager'))
      customElements.define('tax-manager', taxManagerCustomElement);
  }
}
