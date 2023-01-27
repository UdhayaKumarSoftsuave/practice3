import { Component , EventEmitter ,Output } from '@angular/core';
import { account } from '../app.component';
import { Loggingservices } from '../app.services';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers : [Loggingservices]
})
export class NewAccountComponent {

  constructor(private logging : Loggingservices){}

  @Output() account  = new EventEmitter<account>() ;

  onClick(names : any , stauss: any ){
    this.account.emit({name : names.value , status  : stauss.value});
    this.logging.onstatusChange(stauss.value);
  }

}
