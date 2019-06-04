import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Return } from '../core/models/return.model';
import { ReturnService } from '../core/services/return.service';

@Component({
  selector: 'wk-return-manager',
  templateUrl: './return-manager.component.html',
  styleUrls: ['./return-manager.component.css']
})
export class ReturnManagerComponent implements OnInit {

  public returns:Array<Return> = new Array<Return>();
  public isFilterEnabled : boolean = true;

  public  clientId:string;
  public taxYear:string;
  public name:string;
  public returnId:string;
  public returnType:string;
  public returnGroup:string;
  public returnConfiguration:string;
  public returnStatus:string;
  public signer:string;
  public lastAtivity:string;
  public federalEFileStatus:string;
  public office:string;

 constructor(private returnService:ReturnService) {
   this.createDummyReturns();
  }

 ngOnInit() {
 }
 
 createDummyReturns() {
   this.returns.push({clientId:"client1",name:"client1",returnConfiguration:"Default",returnGroup:"Default",returnId:"2018:test:1",lastAtivity:"calculated",signer:"None",office:"Main Office",federalEFileStatus:"",isSelected:false})
   this.returns.push({clientId:"Pasad_S",name:"Pasad_S",returnConfiguration:"Default",returnGroup:"Default",returnId:"2018:test:2",lastAtivity:"Data Changed",signer:"None",office:"Main Office",federalEFileStatus:"",isSelected:false})
   this.returns.push({clientId:"Pradip_D",name:"Pradip_D",returnConfiguration:"Default",returnGroup:"Default",returnId:"2018:test:3",lastAtivity:"calculated",signer:"None",office:"WK Office",federalEFileStatus:"",isSelected:false})
   this.returns.push({clientId:"Akshay_D",name:"Akshay_D",returnConfiguration:"Default",returnGroup:"Default",returnId:"2018:test:4",lastAtivity:"Data Changed",signer:"None",office:"Main Office",federalEFileStatus:"",isSelected:false})
   this.returns.push({clientId:"Vikul_R",name:"Vikul_R",returnConfiguration:"Default",returnGroup:"Default",returnId:"2018:test:5",lastAtivity:"Data Changed",signer:"None",office:"WK Office",federalEFileStatus:"",isSelected:false})
   this.returns.push({clientId:"Sanket_B",name:"Sanket_B",returnConfiguration:"Default",returnGroup:"Default",returnId:"2015:test:6",lastAtivity:"Data Changed",signer:"None",office:"WK Office",federalEFileStatus:"",isSelected:false})
   this.returns.push({clientId:"Vinay_K",name:"Vinay_K",returnConfiguration:"Default",returnGroup:"Default",returnId:"2018:test:7",lastAtivity:"Data Changed",signer:"None",office:"Main Office",federalEFileStatus:"",isSelected:false})
   this.returns.push({clientId:"Yug_R",name:"Yug_R",returnConfiguration:"Default",returnGroup:"Default",returnId:"2018:test:8",lastAtivity:"Data Changed",signer:"None",office:"WK Office",federalEFileStatus:"",isSelected:false})
   this.returns.push({clientId:"Sumit_B",name:"Sumit_B",returnConfiguration:"Default",returnGroup:"Default",returnId:"2015:test:9",lastAtivity:"Data Changed",signer:"None",office:"WK Office",federalEFileStatus:"",isSelected:false})
   this.returns.push({clientId:"Prakash_J",name:"Prakash_J",returnConfiguration:"Default",returnGroup:"Default",returnId:"2018:test:10",lastAtivity:"Data Changed",signer:"None",office:"Main Office",federalEFileStatus:"",isSelected:false})
   this.returns.push({clientId:"Om_S",name:"Om_S",returnConfiguration:"Default",returnGroup:"Default",returnId:"2018:test:11",lastAtivity:"Data Changed",signer:"None",office:"WK Office",federalEFileStatus:"",isSelected:false})
   this.returns.push({clientId:"Ramesh_P",name:"Ramesh_P",returnConfiguration:"Default",returnGroup:"Default",returnId:"2015:test:12",lastAtivity:"Data Changed",signer:"None",office:"WK Office",federalEFileStatus:"",isSelected:false})
 }

 onDelete()
  {
    this.returnService.onReturnDeleted(this.returns.filter(x=> x.isSelected));
    this.returns = this.returns.filter(x=> !x.isSelected);
  }

  toggleSelect(returnId)
  {
      this.returns.map(x=>{
        if(x.returnId == returnId)
          x.isSelected = !x.isSelected;
      })
  }
}
