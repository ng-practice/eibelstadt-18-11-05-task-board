import { NgModule } from '@angular/core'
import { Route, RouterModule } from '@angular/router'
import { TaskBoardComponent } from './task-board/containers/task-board/task-board.component'

const routes: Route[] = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks', component: TaskBoardComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
