import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-add-order-item-modal',
  templateUrl: './add-order-item-modal.component.html',
  styleUrls: ['./add-order-item-modal.component.css']
})
export class AddOrderItemModalComponent implements OnInit {
  store_products: any[] | null = null
  selected_products: any[] = []

  constructor(
    private product_service: ProductService,
    public active_modal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    this.getAllStoreProducts()
  }

  private getAllStoreProducts() {
    this.product_service.getStoreProducts().subscribe(
      (res: any) => {
        this.prepareOrderItems(res)
        this.store_products = res
      }
    )
  }
  
  private prepareOrderItems(items: any) {
    items.forEach((item: any) => {
      item.count = 1
    });
  }

  selectProduct(event: any, product: Product) {

    switch (event.target.checked) {
      case true:
        this.selected_products.push(product);
        break

      case false:
        this.selected_products.splice(this.selected_products.indexOf(product), 1)
        break
    }    
  }

  changeCount(event: any, product: any) {
    product.count = event.target.value
  } 

  save() {
    this.active_modal.close(this.selected_products)
  }

}
