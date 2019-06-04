import { Component, OnInit, Input, ViewChild, Output,EventEmitter } from '@angular/core';
import { NotificationServiceService } from '../../services/notification-service/notification-service.service';
import { Observable } from 'rxjs';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'wk-common-logo-bar',
  templateUrl: './logo-bar.component.html',
  styleUrls: ['./logo-bar.component.scss']
})
export class LogoBarComponent implements OnInit {
  @Input() loggedInUser: string;
  @Output() onLogOutUser: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('notificationDrpDwn')
  private notificationDropDown: NgbDropdown;

  unseenNotifications: any = [];
  constructor(private notificationServiceService: NotificationServiceService) {
  }

  ngOnInit() {
    this.notificationServiceService.notifications.subscribe(data => {
      this.unseenNotifications.push({ message: data })
    });
  }

  handleOpenClosedWorkflow(isOpened) {
    if (isOpened && this.unseenNotifications.length == 0) {
      this.notificationDropDown.close();
    }
    if (!isOpened) {
      this.unseenNotifications = [];
    }

  }

  logOutUser(){
    this.onLogOutUser.emit();
  }

}
