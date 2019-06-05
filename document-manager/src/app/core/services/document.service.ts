import { Injectable } from '@angular/core';
import { BehaviorSubject,Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Document } from '../models/document.model';


@Injectable({
  providedIn: 'root'
})
export class DocumentService {
    constructor(private http: HttpClient) { }

    private DocumentDeleted = new Subject<Document[]>();
    
    public onDocumentDeleted$ = this.DocumentDeleted.asObservable();
    
    public onDocumentDeleted(documents:Document[])
    {
        this.DocumentDeleted.next(documents);
    }
   
}
