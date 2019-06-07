import { Component, OnInit, Renderer2 } from '@angular/core';
import { AppConfig } from './app.config';
import { AddLogin, RemoveLogin } from './core/ngxsStore/actions/login.action';
import { NotificationServiceService } from './core/services/notification-service/notification-service.service';
import { IdentityService } from './core/services/identity/identity.service';
import { LoginState } from './core/ngxsStore/states/login.state'
import { UuidState } from './core/ngxsStore/states/uuid.state'
import { Store } from '@ngxs/store';
import { Router, NavigationStart } from '@angular/router';
import { Menu } from './core/models/menu.model';
import { UUID } from 'angular2-uuid';
import { AddUuid, RemoveUuid } from './core/ngxsStore/actions/uuid.action';
import { filter } from 'rxjs/operators'

@Component({
  selector: 'wk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public isVMenuExpanded = false;
  public isUserLoggedIn = false;
  public logoutBtncalled = false;
  public isLoaderEnabled = false;
  public loggedInUser: string = '';
  public loggedInUserId: string = '';
  public requestedUri: string = '';
  public loadedModule: string = '';
  public areModulesLoaded: boolean = false;
  public menuList: Array<Menu> = new Array<Menu>();
  public breadCrumb = [];

  constructor(private appConfig: AppConfig,
    private notificationServiceService: NotificationServiceService,
    private identityService: IdentityService,
    private renderer: Renderer2,
    private store: Store,
    private router: Router) {this.isLoaderEnabled = false;console.log('loader true'); }

  ngOnInit(): void {
    
    if (!this.isUserLoggedIn)
      this.generateUUID();

    this.appConfig.webApps.forEach((app, index) => {
      this.load(app);
    });

    this.store.select(LoginState.getLogins).subscribe(logins => {
      if (logins.length > 0) {
        this.isUserLoggedIn = true;
        this.loggedInUserId = logins[0].userId;
        this.loggedInUser = logins[0].name;
      }
      else {
        this.isUserLoggedIn = false;
        this.loggedInUserId = '';
        this.loggedInUser = '';
        this.requestedUri = '';
        this.menuList = [];
      }
      this.onLoginStateSelection();
    });

    this.store.select(UuidState.getUuids).subscribe(uuids => {
      if (uuids.length > 0) {
        this.requestedUri = uuids[uuids.length-1].urlRequested;
        this.loadedModule = uuids[uuids.length-1].moduleName;
      }
      else {
        this.requestedUri = '';
        this.loadedModule = '';
      }

    });

    this.router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe((navigationObj: NavigationStart) => {
      if (!this.isUserLoggedIn) {
        this.onLoginStateSelection();
      }
      else
      {
        this.loadedModule = this.getModuleName();
        this.loadRequiredData();
      }
        
    });

    this.onLoginStateSelection();
  }

  generateUUID() {
    let url = window.location.href.substr(window.location.href.indexOf('#') - 1, window.location.href.length - 1);
    if (url != '/#/login/signin' && !this.logoutBtncalled) {
      let moduleName = this.getModuleName();
      let uuidValue = UUID.UUID();
      this.store.dispatch(new AddUuid({ urlRequested: url, isValid: true, uuid: uuidValue,moduleName:moduleName }));
    }
  }

  getModuleName()
  {
    let url = window.location.href;
    let link = url.substr(url.indexOf('#') + 2 ,url.length - 1);
      let menuDetail = this.appConfig.axcessMenus.filter(x=>x.linkAddress == link);
      if(menuDetail.length > 0)
        return menuDetail[0].displayName;
      else
        return '';  
  }

  onLoginStateSelection() {
    if (!this.isUserLoggedIn) {
      this.logoutBtncalled = false;
      this.navigateTo('/#/login/signin')
    }
    else {
      if (this.requestedUri != '') {
        this.loadRequiredData();
        this.navigateTo(this.requestedUri);
      }
      else {
        this.navigateTo('/#/document/documentManager');
      }
    }
  }

  onSignInSubmit(e) {
    let userName: string = e.detail.userName;
    let userId: string = e.detail.userId;
    let isValid: boolean = e.detail.isValid;
    this.store.dispatch(new AddLogin({ name: userName, isValid: isValid, userId: userId }));
  }

  onClientDeleted(event) {
    event.detail.forEach(c => {
      this.notificationServiceService.push(`${c.clientId} deleted from client module.`);
    })
  }

  onReturnDeleted(event) {
    event.detail.forEach(c => {
      this.notificationServiceService.push(`${c.returnId} deleted from return module.`);
    })
  }

  onDocumentDeleted(event) {
    event.detail.forEach(c => {
      this.notificationServiceService.push(`${c.entityId} deleted from document module.`);
    })
  }

  onBreadCrumbChange(data) {
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

  loadRequiredData() {
    this.menuList = [];
    let menuDetails = this.appConfig.axcessMenus;
    let identity = this.appConfig.userPermissions.filter(x => x.userId == this.loggedInUserId);
    if (identity.length > 0) {
      identity[0].accessPoints.forEach(url => {
        this.menuList.push(menuDetails.filter(x => x.linkAddress == url)[0]);
      });
    }
  }

  logOutUser() {
    this.logoutBtncalled = true;
    this.store.dispatch(new RemoveUuid(""));
    this.store.dispatch(new RemoveLogin(this.loggedInUser));
  }

  load(app: any): void {
    if (!app.enabled) {
      console.log(`Config Item ${app.elementName} is not enabled and will not be loaded`);
      return;
    }
    const content = document.getElementById('content');

    const webAppElement: HTMLElement = document.createElement(app.elementName);
    webAppElement.addEventListener('onSignInSubmit', this.onSignInSubmit.bind(this));
    webAppElement.addEventListener('onClientDeleted', this.onClientDeleted.bind(this));
    webAppElement.addEventListener('onDocumentDeleted', this.onDocumentDeleted.bind(this));
    webAppElement.addEventListener('onReturnDeleted', this.onReturnDeleted.bind(this));
    content.appendChild(webAppElement);

    const script = document.createElement('script');
    script.src = app.scriptPath;
    script.onload = this.onScriptLoaded;
    content.appendChild(script);
    script.onerror = () => console.error(`error loading ${app.scriptPath}`);
  }

  public onScriptLoaded()
  {
    eval('delete window.webpackJsonp'); 
    this.isLoaderEnabled = false; 
    console.log('loader false');
  }

}
