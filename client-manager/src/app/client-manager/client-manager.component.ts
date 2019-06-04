import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../core/models/client.model';
import { ClientService } from '../core/services/client.service';

@Component({
  selector: 'wk-client-manager',
  templateUrl: './client-manager.component.html',
  styleUrls: ['./client-manager.component.css']
})
export class ClientManagerComponent implements OnInit {

  public clients:Array<Client> = new Array<Client>();
   public isFilterEnabled : boolean = true;

   public clientId:string = "";
   public clientSubId?:string = "";
   public clientSortName:string = "";
   public clientSubDescription?:string = "";
   public primaryClient:string = "";
   public office:string = "";
   public businessUnit:string = "";
   public lineOfBusiness?:string = "";
   public ClientType:string = "";
   public status:string = "";
   public class:string = "";
   public yearEnd?:string = "";

  constructor(private clientService:ClientService) {
    this.createDummyClients();
   }

  ngOnInit() {
  }
  
  onDelete()
  {
    this.clientService.onClientDeleted(this.clients.filter(x=> x.isSelected));
    this.clients = this.clients.filter(x=> !x.isSelected);
  }

  createDummyClients() {
    this.clients.push({clientId:"client1",clientSortName:"client1",class:"Approved",clientSubId:"",clientSubDescription:"",primaryClient:"T",office:"Main Office",businessUnit:"Main",ClientType:"Corporation",status:"Active",isSelected:false})
    this.clients.push({clientId:"Pasad_S",clientSortName:"Pasad_S",class:"Approved",clientSubId:"",clientSubDescription:"",primaryClient:"T",office:"Main Office",businessUnit:"GIC",ClientType:"Employee Plan",status:"Active",isSelected:false})
    this.clients.push({clientId:"Pradip_D",clientSortName:"Pradip_D",class:"Approved",clientSubId:"PD",clientSubDescription:"",primaryClient:"T",office:"WK Office",businessUnit:"Main",ClientType:"Fiduciary",status:"Active",isSelected:false})
    this.clients.push({clientId:"Akshay_D",clientSortName:"Akshay_D",class:"Approved",clientSubId:"",clientSubDescription:"",primaryClient:"F",office:"Main Office",businessUnit:"GIC",ClientType:"Indivisual",status:"Active",isSelected:false})
    this.clients.push({clientId:"Vikul_R",clientSortName:"Vikul_R",class:"Approved",clientSubId:"",clientSubDescription:"",primaryClient:"T",office:"WK Office",businessUnit:"Main",ClientType:"Partnership",status:"Active",isSelected:false})
    this.clients.push({clientId:"Sanket_B",clientSortName:"Sanket_B",class:"Approved",clientSubId:"",clientSubDescription:"",primaryClient:"T",office:"WK Office",businessUnit:"Main",ClientType:"non-profit",status:"On Hold",isSelected:false})
  }

  toggleSelect(clientId)
  {
      this.clients.map(x=>{
        if(x.clientId == clientId)
          x.isSelected = !x.isSelected;
      })
  }
}
