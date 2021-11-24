import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  constructor() {
    this.todos = [];
  }
  ngOnInit() {
    this.lastTask = JSON.parse(localStorage.getItem('list') || '{}');
    for (let todo of this.lastTask) {
      this.todos.push(todo);
    }
  }

  lastTask: any;
  todo: string | undefined;
  todos: any;

  alert = Swal.mixin({
    toast: true,
    position: 'top-start',
    showConfirmButton: false,
    timerProgressBar: true,
    timer: 2000,
  });

  addTask() {
    this.todo
      ? this.todos.push(this.todo)
      : this.alert.fire({
          icon: 'warning',
          iconColor: '#f27474',
          title: 'Aucune tâche à ajouter',
        });
    localStorage.setItem('list', JSON.stringify(this.todos));
    this.todo = '';
  }

  deleteTask(i: number) {
    this.todos.splice(i, 1);
    const list = JSON.parse(localStorage.getItem('list') || '{}');
    for (let i of list) localStorage.removeItem(this.todos);
    this.alert.fire({
      icon: 'success',
      title: 'Votre tâche a bien été supprimée!',
    });
    localStorage.setItem('list', JSON.stringify(this.todos));
  }

  deleteAll() {
    localStorage.removeItem('list');
    this.todos = [];
  }
}
