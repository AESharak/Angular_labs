import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../models/Todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent {
  @Input() todos: Todo[] = [];
  @Output() deleteTodo = new EventEmitter<number>();
  @Output() toggleComplete = new EventEmitter<number>();
}
