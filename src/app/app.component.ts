import { Component , OnInit} from '@angular/core';
import { AsyncValidatorFn, FormControl, FormGroup, Validators } from '@angular/forms';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  status : string[] = ['stable' , 'critical' , 'finished'];
  forbiddenUsers = ['test'];

  form !: FormGroup;
  ngOnInit(): void {
    this.form = new FormGroup({
      'username' : new FormControl(null , [Validators.required] , this.checkForbiddenUsersAsyns.bind(this) as AsyncValidatorFn),
      'mail' : new FormControl(null , [Validators.required , Validators.email] ),
      'status' : new FormControl('stable')
    });

  }

  onSubmit(){
    console.log(this.form);
  }

  checkForbiddenUsers(control : FormControl) : {[s : string] : boolean}{
    if (this.forbiddenUsers.indexOf(control.value) != -1) {
      return {'forbiddenUser' : true}
    } 
    return null;
  }

  checkForbiddenUsersAsyns(control : FormControl) :Promise<any> | Observable<any>{
    const promise = new Promise((resolve , reject) => {
      setInterval(() => {
        if (this.forbiddenUsers.indexOf(control.value) != -1) {
          resolve({forbiddenUser : true})
        } else{
          resolve(null);
        }
      } , 2000);
    })
    return promise;
  }
}
