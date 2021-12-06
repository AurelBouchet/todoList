import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  @Output() newTodo = new EventEmitter<string>();
  addTodo(value: string) {
    value ? this.newTodo.emit(value) : null;
  }
}
