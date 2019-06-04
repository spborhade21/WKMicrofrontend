import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlankComponent } from './blank/blank.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { createCustomElement } from '@angular/elements'; 

@NgModule({
  declarations: [
    AppComponent,
    BlankComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  schemas :[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [],
  entryComponents :[AppComponent]
})
export class AppModule implements DoBootstrap {

  constructor(private injector:Injector)
  {

  }

  ngDoBootstrap()
  {
    const clientManagerCustomElement = createCustomElement(AppComponent, { injector: this.injector})
    if(!customElements.get('login-manager'))
      customElements.define('login-manager', clientManagerCustomElement);
  }

 }
