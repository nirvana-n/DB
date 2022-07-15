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
  user: any = null

  constructor(
    private order_service: OrderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUser()
    if (this.user)
      this.getOrders()
  }

  getOrders() {
    this.order_service.getAllOrders().subscribe(
      (res: any) => {
        this.orders = res
      }
    )
  }

  getUser() {
    let _user: any = localStorage.getItem('user')
    this.user = JSON.parse(_user)

    console.log("user: ", this.user);

  }

  addOrder() {
    this.router.navigate(['/order', 'add'])
  }

}
