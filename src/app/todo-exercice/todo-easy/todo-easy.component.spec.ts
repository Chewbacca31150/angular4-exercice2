import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoEasyComponent } from './todo-easy.component';

describe('TodoEasyComponent', () => {
  let component: TodoEasyComponent;
  let fixture: ComponentFixture<TodoEasyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoEasyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoEasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
