import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from '../app.routes';
import { SharedModule } from '../shared/shared.module';
import { SHELL_ROUTES } from './shell.routes';
import { BrowserModule } from '@angular/platform-browser';
import { ShellComponent } from './shell.component';

@NgModule({
  declarations: [ShellComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SHELL_ROUTES),
    SharedModule
  ]
})
export class ShellModule { }
