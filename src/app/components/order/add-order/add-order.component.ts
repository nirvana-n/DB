import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from 'src/app/services/order/order.service';
import { AddOrderItemModalComponent } from '../add-order-item-modal/add-order-item-modal.component';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  user: any = null
  selected_products: any = []
  delivery_method: string = ''
  selected_address: any = null

  constructor(
    private modal: NgbModal,
    private order_service: OrderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUser()
  }

  private getUser() {
    let _user: any = localStorage.getItem('user')
    this.user = JSON.parse(_user)
  }

  addOrderItem() {
    let modal = this.modal.open(AddOrderItemModalComponent, {centered: true, size: 'md', scrollable: true})

    modal.closed.subscribe((products: any) => {
      this.selected_products = products
    })
  }

  save() {
    let data = {
      order_items: this.prepareProducts(this.selected_products),
      delivery_method: this.delivery_method,
      customer_address: this.selected_address.id
    }

    this.order_service.sendOrder(data).subscribe(
      (res: any) => {
        this.router.navigate(['/orders'])
      }
    )
  }

  private prepareProducts(products: any) {
    let data: any[] = []
    products.forEach((product: any) => {
      data.push({
        store_product: product.id,
        count: parseInt(product.count)
      })
    });

    return data
  }

  changeDeliveryMethod(method: string) {
    this.delivery_method = method
  }

  selectAddress(address: any) {
    this.selected_address = address
  }

}
