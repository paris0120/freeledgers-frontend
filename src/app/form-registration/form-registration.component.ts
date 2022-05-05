import { Component, OnInit } from '@angular/core';
import {MessageService} from "primeng/api";


@Component({
  selector: 'app-form-registration',
  templateUrl: './form-registration.component.html',
  styleUrls: ['./form-registration.component.css'],
  providers: [MessageService]
})

export class FormRegistrationComponent implements OnInit {
  email: String ="";
  password: String ="";
  password2: String ="";
  lastName: String ="";
  firstName: String ="";
  title: any | undefined;
  passwordMatch = true;
  hasEmail = true;
  hasFirst = true;
  hasLast = true;
  hasPassword = true;
  titles: any[] = [
    {name:'Mr.', code: 'Mr'},
    {name:'Mrs.', code: 'Mrs'},
    {name:'Ms.', code: 'Ms'}
  ];

  constructor(private messageService: MessageService) { }

  checkEmail(){
    this.hasEmail = this.email?.length >0;
    if(!this.hasEmail) this.messageService.add({severity:'error', summary:"Please enter a valid email address."});
  }

  checkPasword(){
    this.hasPassword = this.password?.length >0;
    if(!this.hasPassword) this.messageService.add({severity:'error', summary:"Please enter a valid password."});
  }

  checkFirst(){
    this.hasFirst = this.firstName?.length >0;
    if(!this.hasFirst) this.messageService.add({severity:'error', summary:"Please enter a first name."});
  }

  checkLast(){
    this.hasLast = this.lastName?.length >0;
    if(!this.lastName) this.messageService.add({severity:'error', summary:"Please enter a last name."});
  }

  confirmPassword(){
    this.passwordMatch = this.password == this.password2;
    if(!this.passwordMatch) this.messageService.add({severity:'error', summary:"Passwords don't match"});
  }

  register(){
    this.checkEmail();
    this.checkPasword();
    this.confirmPassword();
    this.checkFirst();
    this.checkLast();

  }
  ngOnInit(): void {
  }

}
