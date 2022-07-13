import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] | null = null

  constructor(private category_service: CategoryService, private router: Router) { }

  ngOnInit(): void {

    this.getAllCategories()
  }

  private getAllCategories() {
    this.category_service.getAllCategories().subscribe(
      (res: any) => {
        this.categories = res
      }
    )
  }
  goToCategorie(category: Category) {
    this.router.navigate(['/category', category.name])
  }

}
