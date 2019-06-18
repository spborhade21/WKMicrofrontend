import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {RouterModule, Router} from '@angular/router';
import { AppComponent } from './app.component';
import {UpgradeModule,downgradeComponent} from '@angular/upgrade/static';
import { WindowRef } from './app.window-ref';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    RouterModule.forRoot(
      [
        {
          path: 'axcess-modules/firm-manager/editOU',
          pathMatch: 'full',
          redirectTo: 'editOrganizationalUnits.html'
        }
    ],
    {
      useHash: true,
      enableTracing: true
    }
    )
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [WindowRef],
  bootstrap: [AppComponent],
  entryComponents:[AppComponent]
})
export class AppModule { }
