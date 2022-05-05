import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {PasswordModule} from "primeng/password";
import {DividerModule} from "primeng/divider";
import {InputNumberModule} from "primeng/inputnumber";
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {SplitButtonModule} from "primeng/splitbutton";
import { FormRegistrationComponent } from './form-registration/form-registration.component';
import {HttpClientModule} from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';
import {PanelModule} from 'primeng/panel';
import {SplitterModule} from "primeng/splitter";
import {DropdownModule} from "primeng/dropdown";
import {ToastModule} from 'primeng/toast';
import { FormLoginComponent } from './form-login/form-login.component';


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    FormRegistrationComponent,
    FormLoginComponent
  ],
  imports: [
    ToastModule,
    PanelModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    PasswordModule,
    DividerModule,
    InputNumberModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    SplitButtonModule,
    HttpClientModule,
    SplitterModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
