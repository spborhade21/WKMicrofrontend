import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Document } from './core/models/document.model';
import { DocumentService } from './core/services/document.service';

@Component({
  selector: 'wk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'document-manager';
  @Output()
  onDocumentDeleted:EventEmitter<Document[]>= new EventEmitter<Document[]>();
  constructor(private router:Router,private clientService:DocumentService)
  {
    
  }

  ngOnInit() {

    this.router.initialNavigation();
    this.subscribeEvents();
  }

  private subscribeEvents()
  {
    this.clientService.onDocumentDeleted$.subscribe(documents=>{
      this.onDocumentDeleted.emit(documents);
    });
   
  }
}
