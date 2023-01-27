import { Component , Input , EventEmitter , Output} from '@angular/core';
import { account } from '../app.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  @Input() account !: account ;
  @Input() index !: number;

  @Output() emited = new EventEmitter<string>();


  onClick(values : string , indexs : number){
    this.emited.emit(values);
    console.log('A server status changed, new status: ' + values);
  }

}
