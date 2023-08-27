import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.scss'],
})
export class User2Component implements OnInit {
  connectionForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.initForm;
  }

  initForm() {
    this.connectionForm = new FormGroup({
      lastTask: new FormControl(''),
      lastDate: new FormControl(''),
    });
  }

  addInfos() {}
}
