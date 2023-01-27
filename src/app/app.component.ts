import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  accounts : account[] = [
    {name : 'hello' , status :'Active'},
    {name : 'haii' , status :'InActive'}
  ];

  onAddAccount(acc : account){
    this.accounts.push(acc);
  }

  emittedValue(value : string , index : number){
    this.accounts[index].status = value;
  }
}
export interface account {
  name : string,
  status : string
}
