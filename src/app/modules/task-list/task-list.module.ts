import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { TaskDetailsComponent } from 'src/app/components/task-details/task-details.component';
import { TaskListRoutingModule } from './task-list-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TaskListComponent,
    TaskDetailsComponent 
  ],
  imports: [
    CommonModule,
    TaskListRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TaskListModule { }
