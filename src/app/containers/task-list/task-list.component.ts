import { Component, OnInit, Input } from '@angular/core'
import { Task } from 'src/app/models'

@Component({
  selector: 'tb-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.sass']
})
export class TaskListComponent {
  @Input()
  tasks: Task[] = []
}
