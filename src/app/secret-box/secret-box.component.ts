import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'

interface ChangeEvent extends Event {
  value: string
}

@Component({
  selector: 'tb-secret-box',
  templateUrl: './secret-box.component.html',
  styleUrls: ['./secret-box.component.sass']
})
export class SecretBoxComponent implements OnInit {
  // <tb-secret-box [message]="someText"></-secret-box>
  @Input()
  message = ''

  // <tb-secret-box (greet)="doSomething()"></-secret-box>
  @Output()
  greet = new EventEmitter<string>()

  constructor() {}

  ngOnInit() {}

  emitGreet(
    evr: Event & { target: { value: string } }
  ) {
    if (!evr || !evr.target) {
      return
    }
    console.log('Input has changed', evr)
    this.greet.emit(evr.target.value)
  }
}
