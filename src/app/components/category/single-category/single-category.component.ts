import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit {
  category_name!: string
  products!: Product[]

  constructor(
    private route: ActivatedRoute,
    private category_service: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCategoryName()
    this.getCategoryProducts()
  }

  private getCategoryName() {
    this.category_name = this.route.snapshot.params['name']
  }

  private getCategoryProducts() {
    this.category_service.getCategoryProducts(this.category_name).subscribe(
      (res: any) => {
        this.products = res
      }
    )
  }

  goToProduct(product: Product) {
    this.router.navigate(['/product', product.name])
  }

}
