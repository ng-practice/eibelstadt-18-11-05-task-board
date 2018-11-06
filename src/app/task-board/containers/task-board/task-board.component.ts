import { Component, OnDestroy } from '@angular/core'
import { interval, Subscription, Observable, of } from 'rxjs'
import { finalize, take } from 'rxjs/operators'
import { TasksService } from '../../lib/tasks.service'
import { Task, TaskDraft } from '../../models'

@Component({
  selector: 'tb-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.sass']
})
export class TaskBoardComponent implements OnDestroy {
  private _intervalSubscription: Subscription

  // tasks: Task[] = []
  tasks$: Observable<Task[]> = of([])
  errorMessage = ''
  completedMessage = ''

  constructor(private _tasks: TasksService) {
    this._refresh()

    this._intervalSubscription = interval(1000)
      .pipe(take(5))
      .subscribe({
        next: () => console.log('INTERVAL')
      })
  }

  ngOnDestroy(): void {
    this._intervalSubscription.unsubscribe()
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
    this.tasks$ = this._tasks.getAll()
    // this._tasks
    //   .getAll()
    //   .pipe(finalize(() => (this.completedMessage = 'Fertig')))
    //   .subscribe({
    //     next: tasks => (this.tasks = tasks),
    //     error: err => (this.errorMessage = err),
    //     complete: () => (this.completedMessage = 'Fertsch')
    //   })
  }
}
