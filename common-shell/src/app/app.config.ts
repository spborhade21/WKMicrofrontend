import { Inject, Injectable } from '@angular/core';
import {  HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { Observable,forkJoin } from 'rxjs';
import { map,catchError} from 'rxjs/operators'

@Injectable()
export class AppConfig {

    public webApps: Array<any> = new Array<any>();
    public axcessMenus : Array<any> = new Array<any>();
    public userPermissions : Array<any> = new Array<any>();
    
     private angularElementsUrl = "https://config-manager.azurewebsites.net/angular-element.config.json";
     private userPermissionsUrl = "https://config-manager.azurewebsites.net/user-permission.config.json";
     private axcessMenusUrl = "https://config-manager.azurewebsites.net/axcess-menu.config.json";
   
    constructor(private http: HttpClient) {

    }

    public load() {
        return new Promise((resolve) => {
            
            let angularelements = this.http.get(this.angularElementsUrl);
            let userPermissions = this.http.get(this.userPermissionsUrl);
            let axcessMenus = this.http.get(this.axcessMenusUrl);

            forkJoin([angularelements, userPermissions, axcessMenus]).subscribe(result=>{
                this.webApps = <any[]>result[0];
                this.userPermissions = <any[]>result[1];
                this.axcessMenus = <any[]>result[2];
                resolve(true);
            })

            // this.http.get(this.angularElementsUrl).pipe(map(res => res)).pipe(
            //     map( res => res))
            //         .subscribe((responseData) => {
            //             this.webApps = <any[]>responseData;
            //             resolve(true);
            //         });
        });
    }
}