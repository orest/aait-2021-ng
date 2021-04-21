import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {



  constructor(private http: HttpClient) { }

  getAllTodos(): Observable<Todo[]> {
    const url = environment.baseUrl;

    return this.http.get<Todo[]>(url + "/todos").pipe(
      tap(p => {
        console.log(p)
      })
    )
    //return this.todos;
  }

  addNewTodo(todo: Todo) {
    return this.http.post(`${environment.baseUrl}/todos`, todo);
    //todo.id = (new Date()).getTime();
    //this.todos.push(todo);
  }

  updateTodo(todo: Todo) {
    return this.http.put(`${environment.baseUrl}/Todos/${todo.id}`, todo)
  }

  deleteTodo(id) {
    return this.http.delete(`${environment.baseUrl}/Todos/${id}`)
  }

  getById(id): Observable<Todo> {
    return this.http.get<Todo>(`${environment.baseUrl}/Todos/${id}`)

  }

  getRandomUsers(howMany) {
    return this.http.get("https://randomuser.me/api?results=" + howMany)
  }

}
