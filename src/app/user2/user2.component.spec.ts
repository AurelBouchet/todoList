import { ComponentFixture, TestBed } from '@angular/core/testing';

import { User2Component } from './user2.component';

describe('UserComponent', () => {
  let component: User2Component;
  let fixture: ComponentFixture<User2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [User2Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(User2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
