import { Component, OnInit } from '@angular/core';
import { Todo } from './models/Todo';
import { TodosService } from './todos/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template:`Orest is best `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hello-angular';
  showTodos = false;
  todos: Todo[];
  //todoService: TodosService;

  constructor(private todoService: TodosService) {
    //this.todoService = todoService;
  }

  ngOnInit(): void {
    //this.refresh();
  }

  // refresh() {
  //   this.todoService.getAllTodos().subscribe(data => {
  //     this.todos = data;
  //   });
  // }

  // addNewTodo(todo: Todo) {
  //   this.todoService.addNewTodo(todo).subscribe(data => {
  //     this.refresh();
  //   });
  // }

  removeTodo(todo: Todo) {
    this.todos = this.todos.filter(p => {
      return p.id != todo.id;
    });
  }
}
