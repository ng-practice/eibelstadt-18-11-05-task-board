import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { newGuid } from 'ts-guid'
import { Task, TaskDraft } from '../models'

@Injectable({
  providedIn: 'root'
})
export class TasksService {
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

  update(task: Task) {
    return this._http.put(`http://localhost:3000/tasks`, task)
  }

  getSingle(guid: string): Observable<Task> {
    return this._http.get<Task>
      (`http://localhost:3000/tasks/${guid}`)
  }
}
