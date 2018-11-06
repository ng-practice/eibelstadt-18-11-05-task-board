import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { newGuid } from 'ts-guid'
import { Task, TaskDraft } from '../models'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private _tasks: Task[] = []

  constructor(private _http: HttpClient) {}

  // getAll(): Observable<Task[]> {
  //   return of(this._tasks).pipe(
  //     // Side-Effects
  //     tap(() => console.log('Ich bin hier')),
  //     tap(() => {
  //       throw new Error('STREAM CRASHED')
  //     }),
  //     tap(() => console.log('Komme hier nicht an')),
  //     catchError(() => of([]))
  //   )
  // }

  getAll(): Observable<Task[]> {
    return this._http.get<Task[]>('http://localhost:3000/tasks')
  }

  create(draft: TaskDraft) {
    return this._http.post('http://localhost:3000/tasks', {
      ...draft,
      guid: newGuid(),
      isComplete: false,
      isInProgress: false,
      isFavorite: false
    })
  }

  remove(task: Task) {
    return this._http.delete(`http://localhost:3000/tasks/${task.guid}`)
  }
}
