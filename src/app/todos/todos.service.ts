import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  // todos: Todo[] = [
  //   {
  //     id: 1,
  //     title: "Learn Angular",
  //     isCompleted: false,
  //     assignedTo: "Orest",
  //     priority: 1,
  //     dueDate: new Date("2021-04-20T00:00:00")
  //   }, {
  //     id: 2,
  //     title: "Wash the car",
  //     isCompleted: true,
  //     assignedTo: "Orest",
  //     priority: 2,
  //     dueDate: new Date("2021-04-20T00:00:00")
  //   }];

  constructor(private http: HttpClient) { }

  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>("https://localhost:44398/api/todos").pipe(
      tap(p => {
        console.log(p)
      })
    )
    //return this.todos;
  }

  addNewTodo(todo: Todo) {
    return this.http.post("https://localhost:44398/api/todos", todo);
    //todo.id = (new Date()).getTime();
    //this.todos.push(todo);
  }

}
