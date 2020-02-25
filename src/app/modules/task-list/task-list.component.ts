import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  taskForm: FormGroup
  taskLists: object;

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.createTaskForm();
  }

  createTaskForm() {
    this.taskForm = this.formBuilder.group({
      taskName: ['', Validators.required],
      taskDate: ['', Validators.required],
      taskDescription: ['', Validators.required]
    })
  }

  onSubmit(values) {
    this.taskLists = this.taskService.addTask(values);
    this.taskForm.reset();
  }

}
