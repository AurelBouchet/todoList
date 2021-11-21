import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  constructor() {
    this.todo = [];
  }

  todo: any;
  inputTask: any;
  alert = Swal.mixin({
    toast: true,
    position: 'top-start',
    showConfirmButton: false,
    timerProgressBar: true,
    timer: 2000,
  });

  addTask() {
    this.inputTask
      ? this.todo.push(this.inputTask)
      : this.alert.fire({
          icon: 'warning',
          iconColor: '#f27474',
          title: 'Aucune tâche à ajouter',
        });
    this.inputTask = '';
  }

  deleteTask(i: number) {
    this.todo.splice(i, 1);
    this.alert.fire({
      icon: 'success',
      title: 'Votre tâche a bien été supprimée!',
    });
  }
}
