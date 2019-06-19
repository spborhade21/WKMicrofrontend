import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {UpgradeModule} from '@angular/upgrade/static';
import { Router } from '@angular/router';
import { WindowRef } from './app.window-ref';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  @Output()
  onOUChanged:EventEmitter<any>= new EventEmitter();
  constructor(public upgrade: UpgradeModule,private windowRef:WindowRef)
  {
    
    
    
  }
  ngOnInit(): void {
    
    let id = document.getElementById('firmContainer');
        this.upgrade.bootstrap(id,['ngOrganizationalUnits'], { strictDi: false });
      
        let event = new CustomEvent(
          "setOfficeData", 
          {
            detail: {
              data: [{id:'1',value:'main office'},{id:'2',value:'wk office'}],
              time: new Date(),
            },
            bubbles: true,
            cancelable: true
          }
        );
        
        id.dispatchEvent(event);

       this.windowRef.nativeWindow['changedNameOfOU'] = function(id,name)
        {
          alert(`name of organizational unit with id ${id} changed to ${name}.`);
          this.onOUChanged = new EventEmitter();
          this.onOUChanged.emit([{id:id,name:name}]);
        }
  }
}
