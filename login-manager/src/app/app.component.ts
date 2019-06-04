import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Router } from '@angular/router';
import { SignInService } from './core/services/sign-in.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'login-manager';
  @Output()
  onSignInSubmit:EventEmitter<{}>= new EventEmitter();
  constructor(private router:Router,private signInService:SignInService){

  }

  ngOnInit(): void {
    this.router.initialNavigation();
    this.signInService.onSignInSubmitted$.subscribe((obj)=>{
      this.onSignInSubmit.emit(obj);
  });
  }
  
}
