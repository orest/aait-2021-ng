import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from "@angular/router"

import { AppComponent } from './app.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoComponent } from './todos/todo/todo.component';
import { TodoDisplayComponent } from './todos/todo-display/todo-display.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartComponent } from './shopping-cart/cart/cart.component';
import { TodoEditComponent } from './todos/todo-edit/todo-edit.component';

let routes: Route[] = [
  { path: "", component: ShoppingCartComponent },
  { path: "todos", component: TodoListComponent },
  { path: "edit-todo/:id", component: TodoEditComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoComponent,
    TodoDisplayComponent,
    ShoppingCartComponent,
    CartComponent,
    TodoEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
