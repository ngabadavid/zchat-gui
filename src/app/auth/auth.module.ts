import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AUTH_ROUTES } from './auth.routes';
import { ZchatLoginComponent } from './zchat-login/zchat-login.component';
import { ZchatRegisterComponent } from './zchat-register/zchat-register.component';
import { ZchatNotFoundComponent } from './zchat-not-found/zchat-not-found.component';
import { ZchatForgotPasswordComponent } from './zchat-forgot-password/zchat-forgot-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ZchatLoginComponent, ZchatRegisterComponent, ZchatNotFoundComponent, ZchatForgotPasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(AUTH_ROUTES),
  ]
})
export class AuthModule { }
