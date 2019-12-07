
import { Component, OnInit } from '@angular/core';
import { Registration } from 'src/models/registration.model';
import { RegistrationService } from 'src/services/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  reg:Registration;
  result:string;
  // summa:string;

  
  
  Gender: any = ['Male','Female','Other'];
  
  constructor( private registrationservice:RegistrationService)
   {
    this.reg=new Registration();
    }



    createUser(){
      // this.registerservice.addUser(this.register);
      // this.result="added";
     console.log(this.reg);
      if(this.registrationservice.addUser(this.reg)) 
          this.result="added";
  
    }
    // fun(event:any)
    // {
    //   debugger
    //     this.summa=event.target.value;
    //     console.log(this.summa);
    // }

  ngOnInit() {
  }

}

