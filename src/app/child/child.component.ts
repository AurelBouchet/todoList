import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Output() newTodo = new EventEmitter<string>();

  addTodo(value: string) {
    this.newTodo.emit(value);
  }
}
