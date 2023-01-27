import { Component , Input , EventEmitter , Output} from '@angular/core';
import { account } from '../app.component';
import { Loggingservices } from '../app.services';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers : [Loggingservices]
})
export class AccountComponent {
  constructor(private logging : Loggingservices){}

  @Input() account !: account ;
  @Input() index !: number;

  @Output() emited = new EventEmitter<string>();


  onClick(values : string , indexs : number){
    this.emited.emit(values);
    this.logging.onstatusChange(values);
  }

}
