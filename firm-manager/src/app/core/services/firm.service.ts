import { Injectable } from '@angular/core';
import { BehaviorSubject,Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Firm } from '../models/firm.model';

@Injectable({
  providedIn: 'root'
})
export class FirmService {
    constructor(private http: HttpClient) { }

    private FirmUpdated = new Subject<Firm[]>();
    
    public onFirmUpdated$ = this.FirmUpdated.asObservable();
    
    public onFirmUpdated(firms:Firm[])
    {
        this.FirmUpdated.next(firms);
    }
   
}