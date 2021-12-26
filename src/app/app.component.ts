import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './../tailwind.scss'],
})
export class AppComponent implements OnInit {
  constructor() {
    this.todos = [];
  }
  todo: any;
  recordedList: any;
  todos: any;

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
    this.todo
      ? this.todos.push(this.todo)
      : this.alert.fire({
          position: 'center',
          icon: 'warning',
          iconColor: '#f27474',
          title: 'Aucune tâche à ajouter',
        });
    localStorage.setItem('list', JSON.stringify(this.todos));
    this.todo = '';
  }

  deleteTodo(i: number) {
    this.todos.splice(i, 1);
    const list = JSON.parse(localStorage.getItem('list') || '{}');
    for (let i of list) localStorage.removeItem(this.todos);
    this.alert.fire({
      position: 'center',
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
        title: 'Êtes-vous sûr.e?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oui, supprimer la liste',
        confirmButtonColor: '#8ab3db',
        cancelButtonText: 'Annuler  ',
        cancelButtonColor: 'red',
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
