import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {
    this.todos = [];
  }
  todo: any;
  recordedList: any;
  todos: any;
  value: any;
  ngOnInit() {
    this.recordedList = JSON.parse(localStorage.getItem('list') || '[]');
    if (this.todos) {
      for (let todo of this.recordedList) {
        this.todos.push(todo);
      }
    } else {
      this.todos;
    }
  }

  alert = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timerProgressBar: true,
    timer: 2000,
  });

  addTodo() {
    this.todos.push(this.todo);
    localStorage.setItem('list', JSON.stringify(this.todos));
    this.todo = '';
  }

  deleteTodo(i: number) {
    this.todos.splice(i, 1);
    const list = JSON.parse(localStorage.getItem('list') || '{}');
    for (let i of list) localStorage.removeItem(this.todos);
    this.alert.fire({
      icon: 'success',
      title: 'Votre tâche a bien été supprimée!',
    });
    localStorage.setItem('list', JSON.stringify(this.todos));
  }

  swal = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger',
    },
    buttonsStyling: false,
  });

  deleteAll() {
    this.swal
      .fire({
        title: 'Etes-vous sûr.e?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oui, supprimer la liste',
        cancelButtonText: 'Annuler',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.swal.fire('Votre liste a été supprimée!', '', 'success');
          localStorage.removeItem('list');
          this.todos = [];
        } else {
          null;
        }
      });
  }
}
