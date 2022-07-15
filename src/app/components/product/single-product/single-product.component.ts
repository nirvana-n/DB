import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';
import { AddReviewComponent } from '../add-review/add-review.component';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  product!: Product
  reviews!: any
  name: string = ''

  constructor(
    private route: ActivatedRoute, 
    private product_service: ProductService,
    private modal: NgbModal
    ) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name']

    this.getProduct(this.name)
    this.getProductRevies(this.name)
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
      }
    )
  }

  openAddRevieModal() {
    let modal = this.modal.open(AddReviewComponent, {centered: true})

    modal.closed.subscribe((res: any) => {
      this.addReview(res)
    })
  }

  private addReview(data: any) {
    let form_data = {
      product_name: this.name,
      data: {
        user: data.user,
        rate: data.rate,
        description: data.review
      }
    }
    
    this.product_service.postProductReview(form_data).subscribe(
      (res: any) => {
        this.ngOnInit()
      }
    )
  }

}
