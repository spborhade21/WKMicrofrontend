import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {UpgradeModule} from '@angular/upgrade/static';
import { Router } from '@angular/router';
import { WindowRef } from '../app.window-ref';
import { FirmService } from '../core/services/firm.service';
import { Firm } from '../core/models/firm.model';

@Component({
  selector: 'app-angular-js-container',
  templateUrl: './angular-js-container.component.html',
  styleUrls: ['./angular-js-container.component.css']
})
export class AngularJsContainerComponent implements OnInit {
  @Output()
  onOUChanged:EventEmitter<any>= new EventEmitter();

  constructor(public upgrade: UpgradeModule,private windowRef:WindowRef,private firmService:FirmService) { }

  ngOnInit(): void {
    let id = document.getElementById('firmContainer');
    this.upgrade.bootstrap(id,['ngOrganizationalUnits'], { strictDi: false });
    this.passOnOUDetails(id);
    this.subScribeToEvents();
  }

  private subScribeToEvents() {
    document.addEventListener("changedFirmData",this.onFirmUpdated.bind(this));
  }

  private passOnOUDetails(id: HTMLElement) {
    let firms:Array<Firm> = JSON.parse(window.localStorage.getItem('firms'));
    let event = new CustomEvent("setOfficeData", {
      detail: {
        data: firms,
        time: new Date(),
      },
      bubbles: true,
      cancelable: true
    });
    id.dispatchEvent(event);
  }

  onFirmUpdated(firm){
    let firms:Array<Firm> = JSON.parse(window.localStorage.getItem('firms'));
    firms.forEach(firmLS=>{ 
      if(firmLS.id == firm.detail.data.id){
         firmLS.name = firm.detail.data.name;
      } 
    });
    window.localStorage.removeItem('firms');
    window.localStorage.setItem('firms',JSON.stringify(firms));
    this.firmService.onFirmUpdated([firm.detail.data]);
  }
}
