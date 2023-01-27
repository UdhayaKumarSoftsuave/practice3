import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-contorl',
  templateUrl: './game-contorl.component.html',
  styleUrls: ['./game-contorl.component.css']
})
export class GameContorlComponent {

  refer : any ;
  count : number = 0;
  @Output('emitValue') emit = new EventEmitter<number>();

  onStart(){
    this.refer = setInterval(() => {
      this.count = this.count + 1;
      this.emit.emit(this.count);
      console.log(this.count);
      
    }, 1000);
  }
  onEnd(){
    clearInterval(this.refer);
  }

}
