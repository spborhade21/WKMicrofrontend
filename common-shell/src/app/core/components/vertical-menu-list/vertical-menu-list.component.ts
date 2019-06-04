import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';
import { Menu } from '../../models/menu.model';

@Component({
  selector: 'wk-common-vertical-menu-list',
  templateUrl: './vertical-menu-list.component.html',
  styleUrls: ['./vertical-menu-list.component.scss']
})
export class VerticalMenuListComponent implements OnInit {
  @Input() menuList:Array<Menu>;
  
  @Output() hideSideNavigation: EventEmitter<any> = new EventEmitter<any>();

  @Output() changeBreadcrumb: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }
  
  ngOnInit() {
  }

  hideVerticalMenu()
  {
    this.hideSideNavigation.emit();
  }

  outsideClicked(e)
  {
    this.hideSideNavigation.emit();
  }

  onMenuSelected(menu:Menu)
  {
    this.changeBreadcrumb.emit([menu.groupName,menu.displayName]);
    this.hideSideNavigation.emit();
  }
}
