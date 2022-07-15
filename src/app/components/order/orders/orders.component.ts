import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[] | null = null

  constructor(
    private order_service: OrderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getOrders()
  }

  getOrders() {
    this.order_service.getAllOrders().subscribe(
      (res: any) => {
        this.orders = res
      }
    )
  }

  goToOrder(order: Order) {
    console.log("does not support yet.");
    
  }

  addOrder() {
    this.router.navigate(['/order', 'add'])
  }

}
