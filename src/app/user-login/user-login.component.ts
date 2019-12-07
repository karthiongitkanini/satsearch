import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';
import { Login } from 'src/models/login.model';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  login:Login;
  constructor(private loginservice :LoginService)//private router: Router
   {
    //  this.login=new Login();
    }
// email: string;
// username:string;
// password: string;

getUser(){
  this.loginservice.getUserData(this.login);

}

  ngOnInit() {
  }
}
