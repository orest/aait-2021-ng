import { Component, OnInit } from '@angular/core';
import { OrderItem } from '../models/OrderItem';
import { Product } from '../models/Product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor() { }
  orderItems: OrderItem[] = [];
  
  products: Product[] = [
    {
      productId: 1,
      name: "product 1",
      sku: "123124",
      price: 99.68
    },
    {
      productId: 2,
      name: "product 2",
      sku: "1231244",
      price: 20.33
    },
    {
      productId: 3,
      name: "product 3",
      sku: "1231245",
      price: 10.23
    }
  ];
  ngOnInit(): void {
  }

  removeFromItemList(item: OrderItem) {
    this.orderItems = this.orderItems.filter(p => {
      return p.productId != item.productId;
    })
  }
  addToCart(product: Product) {
    let orderItem: OrderItem;

    orderItem = this.orderItems.find(p => {
      return p.productId == product.productId
    });

    if (orderItem) {
      orderItem.quantity += 1;
      orderItem.lineTotal = orderItem.quantity * orderItem.unitPrice;
    } else {
      orderItem = {
        id: this.orderItems.length + 1,
        name: product.name,
        productId: product.productId,
        quantity: 1,
        sku: product.sku,
        unitPrice: product.price,
        lineTotal: product.price
      }
      this.orderItems.push(orderItem);
    }

  }
}
