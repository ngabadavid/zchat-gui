import { Routes } from '@angular/router';
import { ZchatNotFoundComponent } from './auth/zchat-not-found/zchat-not-found.component';

export const APP_ROUTES: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
    },
    {
        path: 'zchat',
        loadChildren: () => import('./shell/shell.module').then((m) => m.ShellModule)
    },
    {
        path:'',
        redirectTo: '/auth/login',
        pathMatch: 'full'
    },{
        path:'**',
        component: ZchatNotFoundComponent
    }
]