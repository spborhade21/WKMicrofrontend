import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'wk-document-manager',
  templateUrl: './document-manager.component.html',
  styleUrls: ['./document-manager.component.css']
})
export class DocumentManagerComponent implements OnInit {

  constructor(private router:Router)
  {
     this.router.initialNavigation();
  }

  ngOnInit() {
  }

}
