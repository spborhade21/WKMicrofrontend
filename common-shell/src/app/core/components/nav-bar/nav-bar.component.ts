import { Component, OnInit,Output,EventEmitter,Input,ViewChild } from '@angular/core';
import { Menu } from '../../models/menu.model';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'wk-common-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() lodedModule: string;
  @Input() menuList:Array<Menu>;
  @ViewChild('menuDrpDwn')
  private menuDrpDwn: NgbDropdown;
  @Output() showSideNavigation: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  showVerticalMenu()
  {
    this.showSideNavigation.emit();
  }

  closeDropDown()
  {
    this.menuDrpDwn.close();
  }
}
