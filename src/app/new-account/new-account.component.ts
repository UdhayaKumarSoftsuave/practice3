import { Component , EventEmitter ,Output } from '@angular/core';
import { AccountService } from '../app.account.service';
import { account } from '../app.component';
import { Loggingservices } from '../app.services';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers : [Loggingservices]
})
export class NewAccountComponent {

  constructor(private logging : Loggingservices , private accountService : AccountService){}

  onClick(names : any , stauss: any ){
    this.accountService.AddAccount({name : names.value , status :stauss.value});
  }

}
