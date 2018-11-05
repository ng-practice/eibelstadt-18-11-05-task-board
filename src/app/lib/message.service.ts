import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  getAll(): string[] {
    return ['Hallo', 'Eibelstadt', 'in', 'Deutschland']
  }
}
