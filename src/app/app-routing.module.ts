import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZchatLoginComponent } from './zchat-login/zchat-login.component';
import { ZchatRegisterComponent } from './zchat-register/zchat-register.component';

const routes: Routes = [
  { path: 'login', component: ZchatLoginComponent },
  { path: 'register', component: ZchatRegisterComponent },
  {
    path: 'chats',
    loadChildren: () => import('./chats/chats.module').then((m) => m.ChatsModule)
  },
  {
    path: '**',
    loadChildren: () => import('./chats/chats.module').then((m) => m.ChatsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
