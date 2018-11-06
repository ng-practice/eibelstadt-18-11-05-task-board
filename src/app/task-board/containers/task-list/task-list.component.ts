import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Task } from '../../models'

@Component({
  selector: 'tb-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.sass']
})
export class TaskListComponent {
  @Input()
  tasks: Task[] = []

  @Output()
  removeSingleTask = new EventEmitter<Task>()
}
