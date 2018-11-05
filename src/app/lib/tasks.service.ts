import { Injectable } from '@angular/core'
import { newGuid } from 'ts-guid'
import { Task, TaskDraft } from '../models'

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private _tasks: Task[] = []

  getAll(): Task[] {
    return this._tasks
  }

  create(draft: TaskDraft) {
    this._tasks = [
      ...this._tasks,
      {
        ...draft,
        guid: newGuid(),
        isComplete: false,
        isInProgress: false,
        isFavorite: false
      }
    ]
  }
}
