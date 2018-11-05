import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { SecretBoxComponent } from './secret-box/secret-box.component';
import { TaskListComponent } from './containers/task-list/task-list.component';
import { TaskBoardComponent } from './containers/task-board/task-board.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { AddTaskComponent } from './components/add-task/add-task.component'

@NgModule({
  declarations: [
    AppComponent,
    SecretBoxComponent,
    TaskListComponent,
    TaskBoardComponent,
    TaskCardComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
