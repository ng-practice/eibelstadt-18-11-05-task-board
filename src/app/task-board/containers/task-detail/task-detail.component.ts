import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'
import { Task } from '../../models'
import { filter, map, switchMap } from 'rxjs/operators'
import { TasksService } from '../../lib/tasks.service'

@Component({
  selector: 'tb-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.sass']
})
export class TaskDetailComponent {
  task$: Observable<Task>

  constructor(private _route: ActivatedRoute, private _tasks: TasksService) {
    this.task$ = this._route.paramMap.pipe(
      filter(params => params.has('guid')),
      map(params => params.get('guid') || ''),
      // cancels if pending request
      switchMap(guid => this._tasks.getSingle(guid))
      // executes all
      // mergeMap
      // ignores requests if one is pending
      // Gegenteil von switchMap
      // exhaustMap
    )
  }
}
