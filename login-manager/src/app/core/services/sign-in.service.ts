import { Injectable } from '@angular/core';
import { BehaviorSubject,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

    private signInSubmitted = new Subject<{}>();
    
    
  
    constructor() { }
  
    public onSignInSubmitted$ = this.signInSubmitted.asObservable();
    
    public sendSignInStatus(userName:string,userId:string,isValid:boolean)
    {
        this.signInSubmitted.next({userName:userName,userId:userId,isValid:isValid});
    }

    public getUserLoginInfo()
    {
      return [{ name:'sanket.borhade',id:'3',password:'abcd1234' },
      { name:'pradip.desai',id:'2',password:'abcd1234' },
      { name:'prasad.sharma',id:'1',password:'abcd1234' }]
    }
}
