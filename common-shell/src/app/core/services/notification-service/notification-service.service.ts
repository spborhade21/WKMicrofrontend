import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {

  notifications = new Subject<any>();
  constructor() { }

  push(data){
    this.notifications.next(data);
  }
}
