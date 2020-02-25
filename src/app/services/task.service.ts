import { Injectable } from '@angular/core';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskHistory: Array<any> = [];
  logs: Array<any> = [];

  constructor() {
    if (JSON.parse(localStorage.getItem('task-list'))) this.taskHistory = JSON.parse(localStorage.getItem('task-list'));
    if (JSON.parse(localStorage.getItem('logs'))) this.logs = JSON.parse(localStorage.getItem('logs'));
  }

  addTask(taskDetails) {
    taskDetails['id'] = uuid.v4();
    this.taskHistory.push(taskDetails);
    this.logs.push({ action: `${taskDetails.taskName} added by user`, time: new Date().toDateString() });
    localStorage.setItem('task-list', JSON.stringify(this.taskHistory));
    localStorage.setItem('logs', JSON.stringify(this.logs));
    return { 'task-list': JSON.parse(localStorage.getItem('task-list')), 'logs': JSON.parse(localStorage.getItem('logs')) }
  }

  deleteTask(id) {
    let task = this.taskHistory.find(task => task.id === id);
    this.logs.push({ action: `${task.taskName} deleted by user`, time: new Date().toDateString() });
    this.taskHistory = this.taskHistory.filter(task => task.id !== id);
    localStorage.setItem('task-list', JSON.stringify(this.taskHistory));
    localStorage.setItem('logs', JSON.stringify(this.logs));
    return { 'task-list': JSON.parse(localStorage.getItem('task-list')), 'logs': JSON.parse(localStorage.getItem('logs')) }
  }


}
