import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from '../../../models/product'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] | null = null

  constructor(private product_service: ProductService, private router: Router) { }

  ngOnInit(): void {

    this.getAllProducts()
  }

  private getAllProducts() {
    this.product_service.getProducts().subscribe(
      (res: any) => {
        this.products = res
      }
    )
  }

  searchInProducts(event: any) {
    let title = event.target.value

    this.product_service.getSingleProduct(title).subscribe(
      (res: any) => {
        console.log("res: ", res);

        if (!res.body.length) {
          this.products = [res.body]
        } else {
          this.products = res.body
        }
        // this.products = res.body
      }
    )

  }

  changeSortItem(by: string) {
    {
      switch (by) {
        case "highest_price":
          this.product_service.sortProducts("descending price").subscribe(
            (res: any) => {
              this.products = res
            }
          )

          break

        case "lowest_price":
          this.product_service.sortProducts("ascending price").subscribe(
            (res: any) => {
              this.products = res
            }
          )
          break

        case "newest":
          this.product_service.sortProducts("date").subscribe(
            (res: any) => {
              this.products = res.reverse()
            }
          )

          break

        case "rate":
          this.product_service.sortProducts("rate").subscribe(
            (res: any) => {
              this.products = res
            }
          )

          break
      }
    }
  }

  goToProduct(product: any) {
    this.router.navigate(['/product', product.name])
  }

}
