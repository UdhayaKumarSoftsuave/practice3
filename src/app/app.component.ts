import { Component } from '@angular/core';
import { AccountService } from './app.account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [AccountService]
})
export class AppComponent {
  constructor(private account : AccountService){}

  accounts : account[] = this.account.accounts;

}
export interface account {
  name : string,
  status : string
}
