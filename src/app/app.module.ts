import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/product/products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from  '@angular/common/http';
import { StoresComponent } from './components/store/stores/stores.component';
import { SingleStoreComponent } from './components/store/single-store/single-store.component';
import { SingleProductComponent } from './components/product/single-product/single-product.component';
import { CategoriesComponent } from './components/category/categories/categories.component';
import { SingleCategoryComponent } from './components/category/single-category/single-category.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    StoresComponent,
    SingleStoreComponent,
    SingleProductComponent,
    CategoriesComponent,
    SingleCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
