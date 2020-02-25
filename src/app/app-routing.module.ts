import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "taskList",
    pathMatch: "full"
  },
  {
    path: "taskList",
    loadChildren: () => import('./modules/task-list/task-list.module').then(m => m.TaskListModule)
  },
  {
    path: "**",
    redirectTo: "taskList"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
