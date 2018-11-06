import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SecretBoxComponent } from './secret-box/secret-box.component'
import { TaskBoardModule } from './task-board/task-board.module'

@NgModule({
  declarations: [AppComponent, SecretBoxComponent],
  imports: [BrowserModule, HttpClientModule, TaskBoardModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
