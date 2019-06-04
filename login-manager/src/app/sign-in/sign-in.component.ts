import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SignInService } from '../core/services/sign-in.service';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public isWrongUsernamePassword = false;
  signInForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private signInService:SignInService) { }

  ngOnInit() {
  }
  onSubmit()
  {
    let data = this.signInService.getUserLoginInfo();
    if(data.filter(x=>x.name == this.signInForm.get('userName').value).length > 0)
    {
      let user = data.filter(x=>x.name == this.signInForm.get('userName').value)[0];
      if(user.password == this.signInForm.get('password').value )
      {
        this.signInService.sendSignInStatus(this.signInForm.get('userName').value,user.id,true);
      }
      else
      {
        this.isWrongUsernamePassword = true;
      }
    }
    else
    {
      this.isWrongUsernamePassword = true;
    }
    
  }
}
