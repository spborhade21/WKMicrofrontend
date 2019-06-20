import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {UpgradeModule} from '@angular/upgrade/static';
import { Router } from '@angular/router';
import { WindowRef } from './app.window-ref';
import { FirmService } from './core/services/firm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  @Output()
  onOUChanged:EventEmitter<any>= new EventEmitter();
  constructor(private firmService:FirmService)
  {
  }
  ngOnInit(): void {
    this.subScribeEvents();
  }

  subScribeEvents()
  {
    this.firmService.onFirmUpdated$.subscribe(firms=>{
      this.onOUChanged.emit(firms);
    });
  }
}
