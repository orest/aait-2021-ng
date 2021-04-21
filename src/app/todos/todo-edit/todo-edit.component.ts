import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/Todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private service: TodosService,
    private router: Router
  ) { }
  todo: Todo;
  family = [{
    name: "Orest",
    id: "Orest"
  },
  {
    name: "Ella",
    id: "ella"
  },
  {
    name: "Alexis",
    id: "lexi"
  }
  ]
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(p => {
      console.log(p.id)
      let id = p.id;
      this.service.getById(id).subscribe(response => {
        this.todo = response;
      })
    })
  }

  saveTodo() {
    this.service.updateTodo(this.todo).subscribe(response => {
      //this.router.navigate(["/"]);
      this.router.navigateByUrl("/todos");
    })
  }
}
