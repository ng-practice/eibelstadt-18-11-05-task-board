import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { TasksService } from '../../lib/tasks.service'
import { Task } from '../../models'

@Component({
  selector: 'tb-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.sass']
})
export class TaskTableComponent {
  tasks$: Observable<Task[]>

  constructor(private _tasks: TasksService) {
    this.tasks$ = this._tasks.getAll()
  }

  updateTitle(task: Task, title: string) {
    this._tasks
      .update({ ...task, title })
      .subscribe(() => (this.tasks$ = this._tasks.getAll()))
  }
}
