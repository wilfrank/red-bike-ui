import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LoginComponent, SignInComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    LoginRoutingModule,
  ],
  exports: [LoginComponent, SignInComponent],
})
export class LoginModule {}
