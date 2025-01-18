import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-input',
  imports: [FormsModule],
  templateUrl: './todo-input.component.html',
})
export class TodoInputComponent {
  @Output() newTodo = new EventEmitter<string>();
  newTodoText = '';

  addTodo() {
    if (this.newTodoText.trim()) {
      this.newTodo.emit(this.newTodoText);
      this.newTodoText = '';
    }
  }
}
