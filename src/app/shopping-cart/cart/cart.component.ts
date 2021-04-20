import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { OrderItem } from 'src/app/models/OrderItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() items: OrderItem[];
  @Output() itemDeleted: EventEmitter<OrderItem> = new EventEmitter<OrderItem>();

  constructor() { }

  ngOnInit(): void {
  }

  quantityChanged(item: OrderItem) {
    console.log(item)
    item.lineTotal = item.quantity * item.unitPrice;
  }

  removeItem(item: OrderItem) {
    this.itemDeleted.emit(item);
  }
}
