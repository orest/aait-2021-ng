import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoComponent } from './todos/todo/todo.component';
import { TodoDisplayComponent } from './todos/todo-display/todo-display.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartComponent } from './shopping-cart/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoComponent,
    TodoDisplayComponent,
    ShoppingCartComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
