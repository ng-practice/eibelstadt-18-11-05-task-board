import { NgModule } from '@angular/core'
import { Route, RouterModule } from '@angular/router'
import { TaskBoardComponent } from './task-board/containers/task-board/task-board.component'
import { TaskDetailComponent } from './task-board/containers/task-detail/task-detail.component'
import { TaskTableComponent } from './task-board/containers/task-table/task-table.component'

const routes: Route[] = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks', component: TaskBoardComponent },
  { path: 'table', component: TaskTableComponent },
  { path: 'task/:guid', component: TaskDetailComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
