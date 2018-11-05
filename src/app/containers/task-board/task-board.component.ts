import { Component, OnInit } from '@angular/core'
import { TasksService } from 'src/app/lib/tasks.service'
import { Task, TaskDraft } from 'src/app/models'

@Component({
  selector: 'tb-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.sass']
})
export class TaskBoardComponent {
  tasks: Task[] = []

  constructor(private _tasks: TasksService) {
    this._refresh()
  }

  addTask(draft: TaskDraft) {
    this._tasks.create(draft)
    this._refresh()
  }

  _refresh() {
    this.tasks = this._tasks.getAll()
  }
}
