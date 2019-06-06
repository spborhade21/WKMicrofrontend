import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  constructor() {  }

  showAlert(){
    alert("Hello");
  }

}
