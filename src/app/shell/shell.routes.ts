import { Routes } from '@angular/router';
import { ShellComponent } from './shell.component';
import { inject } from '@angular/core';
import { authGuard } from '../auth/guard/auth.guard';

export const SHELL_ROUTES: Routes = [
    {
        path:'',
        component: ShellComponent,
        children: [
            {
                path: 'chats',
                canActivate: [authGuard],
                loadChildren: () => import('./../chats/chats.module').then((m) => m.ChatsModule)
            },
            {
                path: 'status',
                loadChildren: () => import('./../status/status.module').then((m) => m.StatusModule)
            },
            {
                path: '',
                redirectTo: '/zchat/chats', 
                pathMatch:'full'
            }
        ]
    }
]