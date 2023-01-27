import { Injectable , EventEmitter } from "@angular/core";
import { account } from "./app.component";
import { Loggingservices } from "./app.services";

@Injectable()
export class AccountService {
    constructor(private logging : Loggingservices){}

    accounts : account[] = [
        {name : 'hello' , status :'Active'},
        {name : 'haii' , status :'InActive'}
      ];

      emitted  = new EventEmitter<String>();
      AddAccount(acc : account){
        this.accounts.push(acc);
        this.logging.onstatusChange(acc.status);
        
      }
    
      changesStatus(value : string , index : number){
        this.accounts[index].status = value;
        this.logging.onstatusChange(value);
      }

      

}