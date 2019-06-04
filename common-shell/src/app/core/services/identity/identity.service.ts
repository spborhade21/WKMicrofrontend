import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  

  constructor() { 
  
  }

  

  showAlert(){
    alert("Hello");
  }

  getUserData()
  {
    return [
      {
        userName: 'prasad.sharma',
        accessPoints:[
          'tax/returnManager',
          'document/documentManager',
          'client/clientManager'
        ],
        userId: '1'
     },
      {
        userName: 'pradip.desai',
        accessPoints:[
          'tax/returnManager',
          'document/documentManager',
          'client/clientManager'
        ],
        userId: '2'
     },
      {
         userName: 'sanket.borhade',
         accessPoints:[
           'tax/returnManager',
           'document/documentManager'
         ],
         userId: '3'
      },
  ];
  }

  getMenuDetails()
  {
    return [
      {
        displayName:'Return Manager',
        icon:'commonglyphs axcessglyphs-tax group-menu-icon',
        linkAddress:'tax/returnManager',
        groupName:'Tax'
      },
      {
        displayName:'Document Manager',
        icon:'commonglyphs axcessglyphs-document group-menu-icon',
        linkAddress:'document/documentManager',
        groupName:'Document'
      },
      {
        displayName:'Client Manager',
        icon:'commonglyphs axcessglyphs-clients group-menu-icon',
        linkAddress:'client/clientManager',
        groupName:'Clients'
      }
    ];
  }

  isUserAuthorised(userId:string,url:string):boolean
  {
    return this.getUserData().filter(x=>x.userId == userId)[0].accessPoints.filter(y=>y == url).length > 0;
  }

}
