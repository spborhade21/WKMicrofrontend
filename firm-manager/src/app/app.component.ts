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
  constructor(public upgrade: UpgradeModule,private router:Router,private windowRef:WindowRef)
  {}
  ngOnInit(): void {
    
    let id = document.getElementById('firmContainer');
        this.upgrade.bootstrap(id,['ngOrganizationalUnits'], { strictDi: false });
       this.router.initialNavigation();    
       this.windowRef.nativeWindow['changedNameOfOU'] = function(id,name)
        {
          alert(`name of organizational unit with id ${id} changed to ${name}.`);
          console.log([{id:id,name:name}]);
          this.onOUChanged = new EventEmitter();
          this.onOUChanged.emit([{id:id,name:name}]);
        }
  }
}
