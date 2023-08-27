import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.scss'],
})
export class User1Component implements OnInit {
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
