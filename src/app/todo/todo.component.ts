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
    this.lastTask = localStorage.getItem('2');
    console.log(this.lastTask);
    this.todos.push(this.lastTask);
  }
  lastTask: any | [];
  id: number = Date.now();
  task: any;
  todos: any;
  alert = Swal.mixin({
    toast: true,
    position: 'top-start',
    showConfirmButton: false,
    timerProgressBar: true,
    timer: 2000,
  });

  addTask() {
    this.task
      ? this.todos.push(this.task)
      : this.alert.fire({
          icon: 'warning',
          iconColor: '#f27474',
          title: 'Aucune tâche à ajouter',
        });
    localStorage.setItem(JSON.stringify(this.id), JSON.stringify(this.task));
    this.task = '';
  }

  deleteTask(i: number) {
    this.todos.splice(i, 1);
    this.alert.fire({
      icon: 'success',
      title: 'Votre tâche a bien été supprimée!',
    });
  }
}
