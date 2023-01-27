import { Component , Input , EventEmitter , Output} from '@angular/core';
import { AccountService } from '../app.account.service';
import { account } from '../app.component';
import { Loggingservices } from '../app.services';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers : [Loggingservices]
})
export class AccountComponent {
  constructor(private logging : Loggingservices,
  private services : AccountService){}

  @Input() account !: account ;
  @Input() index !: number;


  onClick(values : string , indexs : number){
    this.services.changesStatus(values ,indexs );
    this.services.emitted.emit(values);
  }

}
