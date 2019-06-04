import { Injectable } from '@angular/core';
import { BehaviorSubject,Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
    constructor(private http: HttpClient) { }

    private ClientDeleted = new Subject<Client[]>();
    
    public onClientDeleted$ = this.ClientDeleted.asObservable();
    
    public onClientDeleted(clients:Client[])
    {
        this.ClientDeleted.next(clients);
    }
   
}
