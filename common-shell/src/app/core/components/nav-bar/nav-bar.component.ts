import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'wk-common-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Output() showSideNavigation: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  showVerticalMenu()
  {
    this.showSideNavigation.emit();
  }
}
