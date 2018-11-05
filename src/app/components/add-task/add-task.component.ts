import { Component, EventEmitter, Output } from '@angular/core'
import { TaskDraft } from '../../models'

@Component({
  selector: 'tb-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.sass']
})
export class AddTaskComponent {
  @Output()
  create = new EventEmitter<TaskDraft>()

  emitCreate(title: string, text: string): void {
    this.create.emit({ title, text })
  }
}
