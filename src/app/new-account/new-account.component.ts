import { Component , EventEmitter ,Output } from '@angular/core';
import { account } from '../app.component';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  @Output() account  = new EventEmitter<account>() ;

  onClick(names : any , stauss: any ){
    this.account.emit({name : names.value , status  : stauss.value});
    console.log('A server status changed, new status: ' + stauss.value);
  }

}
