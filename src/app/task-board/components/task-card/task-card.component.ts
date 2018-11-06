import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Task } from '../../models'

@Component({
  selector: 'tb-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.sass']
})
export class TaskCardComponent {
  @Input()
  task: Task = {} as Task

  @Output()
  remove = new EventEmitter<Task>()
}
