import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenNumber : number[] = [];
  oddNumber : number[] = [];

  emittedValue(value : number){
    if (value %2 == 0) {
      this.evenNumber.push(value);
    } else {
      this.oddNumber.push(value);
    }
  }
}
