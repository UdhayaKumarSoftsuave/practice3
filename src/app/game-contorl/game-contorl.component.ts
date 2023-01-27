import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-contorl',
  templateUrl: './game-contorl.component.html',
  styleUrls: ['./game-contorl.component.css']
})
export class GameContorlComponent {

  refer : any ;
  count : number = 0;
  counts : number[] = [];

  onStart(){
    this.refer = setInterval(() => {
      this.count = this.count + 1;
      this.counts.push(this.count);
      console.log(this.counts);
      
    }, 1000);
  }
  onEnd(){
    clearInterval(this.refer);
  }

}
