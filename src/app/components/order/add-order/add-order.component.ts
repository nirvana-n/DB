import { Component, OnInit } from '@angular/core';
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

  constructor(
    private modal: NgbModal,
    private order_service: OrderService
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
      console.log("after close: ", this.selected_products);
      
    })
  }

  save() {
    let data = {
      order_items: this.prepareProducts(this.selected_products),
      delivery_method: this.delivery_method
    }

    console.log("data fucker: ", data);
    

    this.order_service.sendOrder(data).subscribe(
      (res: any) => {
        console.log("fuck you: ", res);
        
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

}
