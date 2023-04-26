import { Routes } from '@angular/router';
import { ZchatLoginComponent } from './zchat-login/zchat-login.component';
import { ZchatRegisterComponent } from './zchat-register/zchat-register.component';
import { ZchatForgotPasswordComponent } from './zchat-forgot-password/zchat-forgot-password.component';
import { ZchatNotFoundComponent } from './zchat-not-found/zchat-not-found.component';

export const AUTH_ROUTES: Routes = [
    {
        path:'login',
        component: ZchatLoginComponent
    },
    {
        path:'register',
        component: ZchatRegisterComponent
    },
    {
        path:'forgot-password',
        component: ZchatForgotPasswordComponent
    },
    {
        path:'',
        redirectTo: '/auth/login',
        pathMatch: 'full'
    },
    {
        path:'**',
        component: ZchatNotFoundComponent
    }
]