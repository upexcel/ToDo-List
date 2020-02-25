import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit, OnChanges {

  @Input() taskLists: Array<any>;
  tasks: any;
  logs: Array<any> = [];

  constructor(
    private taskService: TaskService
  ) {
    if (JSON.parse(localStorage.getItem('task-list'))) this.tasks = JSON.parse(localStorage.getItem('task-list'));
    if (JSON.parse(localStorage.getItem('logs'))) this.logs = JSON.parse(localStorage.getItem('logs'));
  }

  ngOnInit() { }

  ngOnChanges() {
    if (this.taskLists) {
      this.tasks = this.taskLists['task-list'];
      this.logs = this.taskLists['logs']
    }
  }

  deleteTask(id) {
    let res = this.taskService.deleteTask(id);
    this.logs = res.logs;
    this.tasks = res["task-list"];
  }

}
