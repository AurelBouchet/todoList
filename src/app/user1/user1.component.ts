import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LastTask, TaskRepository } from '../store/task.store';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.scss'],
})
export class User1Component {
  connectionForm = new FormGroup({
    lastTask: new FormControl(''),
    lastDate: new FormControl(''),
  });

  constructor(private taskRepository: TaskRepository) {}

  addInfos() {
    this.connectionForm?.setValue({
      lastTask: this.connectionForm.get('lastTask')?.value,
      lastDate: this.connectionForm.get('lastDate')?.value,
    });
    this.taskRepository.updateLastTask(this.connectionForm.value);
  }
}
