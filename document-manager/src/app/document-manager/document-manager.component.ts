import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentService } from '../core/services/document.service';
import { Document } from '../core/models/document.model';

@Component({
  selector: 'wk-document-manager',
  templateUrl: './document-manager.component.html',
  styleUrls: ['./document-manager.component.css']
})
export class DocumentManagerComponent implements OnInit {
 
  public documents:Document[] = new Array<Document>();

  constructor(private documentService:DocumentService) {
    this.createDummyDocuments();
   }
 
  ngOnInit() {
  }
  
  createDummyDocuments() {
    this.documents.push(
      {documentId:'d1',status:true,published:'',discussion:'',class:'Accounting',subClass:'Currespondance',dateModified:new Date,type:'Microsoft Word Doc',size:'5 KB',entityId:'prodnc',entityName:'prodnc',folder:'Root'},
      {documentId:'d2',status:true,published:'',discussion:'',class:'Accounting',subClass:'Currespondance',dateModified:new Date,type:'Microsoft Word Doc',size:'200 KB',entityId:'FIU 1',entityName:'FIU 1',folder:'2015'},
      {documentId:'d3',status:true,published:'wk-icon wk-icon-pencil-square',discussion:'',class:'Sub Class-1',subClass:'Currespondance',dateModified:new Date,type:'Outlook Item',size:'309 KB',entityId:'prodnc',entityName:'prodnc',folder:'2015'},
      {documentId:'d4',status:true,published:'',discussion:'',class:'Accounting',subClass:'Currespondance',dateModified:new Date,type:'Microsoft Word Doc',size:'55 KB',entityId:'prodnc',entityName:'prodnc',folder:'2016'},
      {documentId:'d5',status:false,published:'wk-icon wk-icon-pencil-square',discussion:'',class:'Sub Class-1',subClass:'Currespondance',dateModified:new Date,type:'Outlook Item',size:'10 KB',entityId:'FIU 2',entityName:'FIU 2',folder:'2016'},
      {documentId:'d6',status:false,published:'',discussion:'',class:'Sub Class-1',subClass:'Currespondance',dateModified:new Date,type:'PDF File',size:'4004 KB',entityId:'FIU 3',entityName:'FIU 3',folder:'Root'},
      {documentId:'d7',status:true,published:'',discussion:'',class:'Accounting',subClass:'Currespondance',dateModified:new Date,type:'Microsoft Word Doc',size:'15 KB',entityId:'prodnc',entityName:'prodnc',folder:'Root'},
      {documentId:'d8',status:true,published:'',discussion:'',class:'Accounting',subClass:'Currespondance',dateModified:new Date,type:'PDF File',size:'1200 KB',entityId:'FIU 4',entityName:'FIU 4',folder:'Root'},
      {documentId:'d9',status:true,published:'',discussion:'',class:'Accounting',subClass:'Currespondance',dateModified:new Date,type:'Outlook Item',size:'120 KB',entityId:'prodnc',entityName:'prodnc',folder:'2017'},
      {documentId:'d10',status:true,published:'',discussion:'',class:'Accounting',subClass:'Currespondance',dateModified:new Date,type:'Microsoft Word Doc',size:'30 KB',entityId:'prodnc',entityName:'prodnc',folder:'2017'},
      )
   
  }
 
  onDelete(documentId)
   {
     this.documentService.onDocumentDeleted(this.documents.filter(x=> x.documentId == documentId));
     this.documents = this.documents.filter(x=> x.documentId != documentId);
   }

}
