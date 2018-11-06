import { Component } from '@angular/core'

@Component({
  selector: 'tb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Taskboard'

  updateTitle(title: string) {
    this.title = title
  }
}
