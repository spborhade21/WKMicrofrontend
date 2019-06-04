import { Injectable } from '@angular/core';
import { BehaviorSubject,Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Return } from '../models/return.model';


@Injectable({
  providedIn: 'root'
})
export class ReturnService {
    constructor(private http: HttpClient) { }

    private ReturnDeleted = new Subject<Return[]>();
    
    public onReturnDeleted$ = this.ReturnDeleted.asObservable();
    
    public onReturnDeleted(clients:Return[])
    {
        this.ReturnDeleted.next(clients);
    }
   
}
