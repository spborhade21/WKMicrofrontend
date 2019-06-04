import { Component,OnInit, Renderer2 } from '@angular/core';
import { AppConfig } from './app.config';
import { AddLogin, RemoveLogin } from './core/ngxsStore/actions/login.action';
import { NotificationServiceService } from './core/services/notification-service/notification-service.service';
import { IdentityService } from './core/services/identity/identity.service';
import { LoginState } from './core/ngxsStore/states/login.state'
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { Menu } from './core/models/menu.model';

@Component({
  selector: 'wk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  public isVMenuExpanded = false;
  public isUserLoggedIn = false;
  public loggedInUser: string = '';
  public areModulesLoaded: boolean = false;
  public menuList: Array<Menu> = new Array<Menu>();
  public breadCrumb = [];

  constructor(private appConfig: AppConfig,
    private notificationServiceService: NotificationServiceService,
    private identityService: IdentityService,
    private renderer:Renderer2,
    private store: Store,
    private router: Router) {}

  ngOnInit(): void {
    
    this.store.select(LoginState.getLogins).subscribe(logins => {
      this.onLoginStateSelection(logins);
  });
  }

  onLoginStateSelection(logins) {
    if (logins.length == 0) {
      this.navigateTo('/#/login/signin');
    }
    else {
      this.loadRequiredData(logins);
      this.breadCrumb.push('Clients','Client Manager');
      this.navigateTo('/#/client/clientManager');
    }
  }

  onSignInSubmit(e) {
    let userName: string = e.detail.userName;
    let userId: string = e.detail.userId;
    let isValid: boolean = e.detail.isValid;
    this.store.dispatch(new AddLogin({ name: userName, isValid: isValid, userId: userId }));
    this.loadRequiredData([{ name: userName, userId: userId }]);
    this.navigateTo('/#/client/clientManager');
  }

  onClientDeleted(event)
  {
    event.detail.forEach(c=>{
        this.notificationServiceService.push(`${c.clientId} deleted from client module.`);
    })
  }

  onReturnDeleted(event)
  {
    event.detail.forEach(c=>{
        this.notificationServiceService.push(`${c.returnId} deleted from return module.`);
    })
  }

  onBreadCrumbChange(data)
  {
      this.breadCrumb = [];
      this.breadCrumb.push(...data);
  }

  navigateTo(urlToNavigate) {
    let url = window.location.href;
    let host = window.location.hostname;
    let protocol = window.location.protocol;
    let port = window.location.port;
    let finalUrl = protocol + '//' + host;
    if (port != '' && port != null)
      finalUrl += ':' + port;
    finalUrl += urlToNavigate;
    window.location.href = finalUrl;
  }

  loadRequiredData(logins: any) {
    this.menuList = [];
    this.isUserLoggedIn = true;
    this.loggedInUser = logins[0].name;
    let menuDetails = this.identityService.getMenuDetails();
    let identity = this.identityService.getUserData().filter(x => x.userId == logins[0].userId);
    if (identity.length > 0) {
      identity[0].accessPoints.forEach(url => {
        this.menuList.push(menuDetails.filter(x => x.linkAddress == url)[0]);
      });
    }
  }

  logOutUser() {
    this.store.dispatch(new RemoveLogin(this.loggedInUser)).subscribe(logins=>{
      this.menuList = [];
      this.isUserLoggedIn = false;
      this.navigateTo('/#/login/signin');
    });
  }
}


 // this.appConfig.webApps.forEach((app,index) => {
    //   window.setTimeout(this.load.bind(this,app), index * 1000);
    // });

// public load(app: any): void {
//   if (!app.enabled) {
//     console.log(`Config Item ${app.elementName} is not enabled and will not be loaded`);
//     return;
//   }
//   const content = document.getElementById('content');
 

//   const webAppElement: HTMLElement = document.createElement(app.elementName);
  
//   webAppElement.addEventListener('onSignInSubmit', this.onSignInSubmit.bind(this));
//   content.appendChild(webAppElement);
//   //webAppElement.setAttribute('ng-init', 'ngDoBootstrap()');
//   const script = document.createElement('script');
//   script.src = app.scriptPath;
//   content.appendChild(script);

//   const scriptDelete = document.createElement('script');
//   scriptDelete.innerHTML = "delete window.webpackJsonp";
//   content.appendChild(scriptDelete);
//   script.onerror = () => console.error(`error loading ${app.scriptPath}`);
// }