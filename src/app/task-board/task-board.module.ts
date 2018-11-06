import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card'
import { DropdownModule } from 'primeng/dropdown'
import { TableModule } from 'primeng/table'
import { InputTextModule } from 'primeng/inputtext'
import { AddTaskComponent } from './components/add-task/add-task.component'
import { TaskCardComponent } from './components/task-card/task-card.component'
import { TaskBoardComponent } from './containers/task-board/task-board.component'
import { TaskListComponent } from './containers/task-list/task-list.component'
import { TaskTableComponent } from './containers/task-table/task-table.component'

@NgModule({
  declarations: [
    TaskListComponent,
    TaskBoardComponent,
    TaskCardComponent,
    AddTaskComponent,
    TaskTableComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    TableModule,
    InputTextModule,
    DropdownModule
  ],
  exports: [TaskBoardComponent]
})
export class TaskBoardModule {}
