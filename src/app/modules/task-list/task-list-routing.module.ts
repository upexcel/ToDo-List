import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: TaskListComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class TaskListRoutingModule { }
