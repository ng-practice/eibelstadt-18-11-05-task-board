import { Component } from '@angular/core'
import { finalize } from 'rxjs/operators'
import { TasksService } from '../../lib/tasks.service'
import { Task, TaskDraft } from '../../models'

@Component({
  selector: 'tb-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.sass']
})
export class TaskBoardComponent {
  tasks: Task[] = []
  errorMessage = ''
  completedMessage = ''

  constructor(private _tasks: TasksService) {
    this._refresh()
  }

  addTask(draft: TaskDraft) {
    this._tasks.create(draft).subscribe({
      next: () => this._refresh()
    })
  }

  removeTaskFromList(task: Task) {
    this._tasks.remove(task).subscribe(() => this._refresh())
  }

  _refresh() {
    this._tasks
      .getAll()
      .pipe(finalize(() => (this.completedMessage = 'Fertig')))
      .subscribe({
        next: tasks => (this.tasks = tasks),
        error: err => (this.errorMessage = err),
        complete: () => (this.completedMessage = 'Fertsch')
      })
  }
}
