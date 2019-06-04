import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Return } from './core/models/return.model';
import { ReturnService } from './core/services/return.service';

@Component({
  selector: 'wk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'tax-manager';
  @Output()
  onReturnDeleted:EventEmitter<Return[]>= new EventEmitter();
  constructor(private router:Router,private returnService:ReturnService)
  {
     
  }

  ngOnInit() {

    this.router.initialNavigation();
    this.subscribeEvents();
  }

  private subscribeEvents()
  {
    this.returnService.onReturnDeleted$.subscribe(clients=>{
      this.onReturnDeleted.emit(clients);
    });
   
  }
}
