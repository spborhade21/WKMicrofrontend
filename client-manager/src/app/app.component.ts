import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from './core/models/client.model';
import { ClientService } from './core/services/client.service';

@Component({
  selector: 'wk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client-manager';
  @Output()
  onClientDeleted:EventEmitter<Client[]>= new EventEmitter();
  constructor(private router:Router,private clientService:ClientService)
  {
    
  }

  ngOnInit() {

    this.router.initialNavigation();
    this.subscribeEvents();
  }

  private subscribeEvents()
  {
    this.clientService.onClientDeleted$.subscribe(clients=>{
      this.onClientDeleted.emit(clients);
    });
   
  }
}
