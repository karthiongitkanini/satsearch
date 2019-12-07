import{HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';

import { Login } from 'src/models/login.model';


@Injectable()
export class LoginService{


    login:any;
    constructor(private myHttp:HttpClient){
        this.login=[];

    }


    getUserDataFromAPI(log:Login){
        return this.myHttp.get("https://localhost:44367/api/Login?email="+log.Email+"&upass="+log.Password);
    }
    getUserData(login):Login[]{
        this.getUserDataFromAPI(login).subscribe((data)=>
        {
            console.log(data);
        this.login=data;
    });
    return this.login;
    }
}