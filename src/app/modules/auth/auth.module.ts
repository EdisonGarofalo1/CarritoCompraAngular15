import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './page/login/login.component';
import { AuthListComponent } from './page/auth-list/auth-list.component';
import { AuthAgregarComponent } from './page/auth-agregar/auth-agregar.component';



@NgModule({
  declarations: [
 
    LoginComponent,
      AuthListComponent,
      AuthAgregarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
