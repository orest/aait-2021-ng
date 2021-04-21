import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Todo } from "src/app/models/Todo";
import { TodosService } from "../todos.service";
@Component({
  selector: "todo-list",
  templateUrl: "./todo-list.component.html"
  //template: "Todo Component Data"
})
export class TodoListComponent {
  //@Input() todos;
  //@Output() delete: EventEmitter<Todo> = new EventEmitter<Todo>();
  todos: Todo[];
  users: any

  constructor(private todoService: TodosService) {

  }

  ngOnInit(): void {
    //1
    this.refresh();
  }

  refresh() {
    //2
    this.todoService.getAllTodos().subscribe(data => {
      // 3 
      this.todos = data;
    });
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo.id).subscribe(arg => {
      this.refresh();
    });
  }

  getRandomUsers() {
    this.todoService.getRandomUsers(5).subscribe(data => {
      this.users = data;
    })
  }
}

