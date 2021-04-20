import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Todo } from "src/app/models/Todo";


@Component({
  selector: "todo-list",
  templateUrl: "./todo-list.component.html"
  //template: "Todo Component Data"
})
export class TodoListComponent {
  @Input() todos;
  @Output() delete: EventEmitter<Todo> = new EventEmitter<Todo>();

  deleteTodo(todo) {
    this.delete.emit(todo);
  }

  test() {
    //   let t of todos
    for (let t of this.todos) {

    }
  }

}

