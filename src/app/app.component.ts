import { Component } from '@angular/core'
import { MessageService } from './lib/message.service'

@Component({
  selector: 'tb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Taskboard'
  messages: string[]

  constructor(private some: MessageService) {
    this.messages = this.some.getAll()
  }

  updateTitle(title: string) {
    this.title = title
  }
}
