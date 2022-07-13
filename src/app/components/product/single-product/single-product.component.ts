import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  product!: Product
  reviews!: any

  constructor(private route: ActivatedRoute, private product_service: ProductService) { }

  ngOnInit(): void {
    let name = this.route.snapshot.params['name']

    this.getProduct(name)
    this.getProductRevies(name)
  }

  private getProduct(name: string) {
    this.product_service.getSingleProduct(name).subscribe(
      (res: any) => {
        this.product = res.body
      }
    )
  }

  private getProductRevies(name: string) {
    this.product_service.getProductReviews(name).subscribe(
      (res: any) => {
        this.reviews = res
        console.log("reviews: ", this.reviews);
        
      }
    )
  }

}
