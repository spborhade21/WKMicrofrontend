import { Inject, Injectable } from '@angular/core';
import {  HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map,catchError} from 'rxjs/operators'
//import scriptPath from '../assets/configs/scriptPath.config.json';
@Injectable()
export class AppConfig {

    public webApps: Array<any> = new Array<any>();
    private jsonUrl = "assets/configs/scriptPath.config.json";
   
    constructor(private http: HttpClient) {

    }

    public load() {
        return new Promise((resolve) => {
            this.http.get(this.jsonUrl).pipe(map(res => res)).pipe(
                map( res => res))
                    .subscribe((responseData) => {
                        this.webApps = <any[]>responseData;
                        resolve(true);
                    });
        });
    }
}