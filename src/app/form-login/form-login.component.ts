import { Component, OnInit } from '@angular/core';
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
  providers: [MessageService]
})
export class FormLoginComponent implements OnInit {

  public email = "";
  public password = "";
  public hasPassword = true;
  public hasEmail = true;
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }


  checkEmail(){
    this.hasEmail = this.email?.length >0;
    if(!this.hasEmail) this.messageService.add({severity:'error', summary:"Please enter a valid email address."});
  }

  checkPasword(){
    this.hasPassword = this.password?.length >0;
    if(!this.hasPassword) this.messageService.add({severity:'error', summary:"Please enter a valid password."});
  }

  login() {
    this.checkEmail();
    this.checkPasword();

  }
}
