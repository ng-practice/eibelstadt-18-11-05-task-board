import { Component, OnInit } from '@angular/core'
import { TasksService } from '../../lib/tasks.service'
import { Task, TaskDraft } from '../../models'

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

  removeTaskFromList(task: Task) {
    this._tasks.remove(task)
    this._refresh()
  }

  _refresh() {
    this.tasks = this._tasks.getAll()
  }
}
