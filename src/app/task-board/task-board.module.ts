import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card'
import { AddTaskComponent } from './components/add-task/add-task.component'
import { TaskCardComponent } from './components/task-card/task-card.component'
import { TaskBoardComponent } from './containers/task-board/task-board.component'
import { TaskListComponent } from './containers/task-list/task-list.component'

@NgModule({
  declarations: [
    TaskListComponent,
    TaskBoardComponent,
    TaskCardComponent,
    AddTaskComponent
  ],
  imports: [CommonModule, ButtonModule, CardModule],
  exports: [TaskBoardComponent]
})
export class TaskBoardModule {}
