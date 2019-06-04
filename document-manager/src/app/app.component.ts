import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'wk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'document-manager';
  constructor(private router:Router)
  {
    
  }

  ngOnInit() {
        this.router.initialNavigation();
  }
}
