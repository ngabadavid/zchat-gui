import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusContainer } from './status.container';
import { RouterModule } from '@angular/router';
import { STATUS_ROUTES } from './status.routes';



@NgModule({
  declarations: [
    StatusContainer
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(STATUS_ROUTES),
  ]
})
export class StatusModule { }
