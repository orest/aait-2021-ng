import { Component, EventEmitter, OnInit, Output } from "@angular/core";

import { Todo } from "../../models/Todo";
import { TodoDisplayComponent } from "../todo-display/todo-display.component";

@Component({
  selector: "todo",
  templateUrl: "./todo.component.html"
})
export class TodoComponent implements OnInit {
  @Output() add: EventEmitter<Todo> = new EventEmitter<Todo>();

  newTodo: Todo = <Todo>{};

  message: string = "Hello Angular";
  operator: string;
  event = {
    eventId: 100,
    title: "Angular Event",
    cost: 2300,
    eventDate: new Date()
  }
  todos: any[] = [];
  todoTitle: string

  ngOnInit(): void {
    console.log("ON init");
  }

  addTodo() {
    if (!this.newTodo.assignedTo) this.newTodo.assignedTo = "orest";
    let todoCopy = { ...this.newTodo };

    this.add.emit(todoCopy);
    console.log(this.newTodo)

  }
  setTitle() {
    this.todoTitle = "Hello Angular";
  }

}
