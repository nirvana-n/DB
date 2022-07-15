import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/product/products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { StoresComponent } from './components/store/stores/stores.component';
import { SingleStoreComponent } from './components/store/single-store/single-store.component';
import { SingleProductComponent } from './components/product/single-product/single-product.component';
import { CategoriesComponent } from './components/category/categories/categories.component';
import { SingleCategoryComponent } from './components/category/single-category/single-category.component';
import { LoginComponent } from './components/auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './components/auth/signup/signup.component';
import { BaseComponent } from './components/base/base.component';
import { AddReviewComponent } from './components/product/add-review/add-review.component';
import { OrdersComponent } from './components/order/orders/orders.component';
import { AddOrderComponent } from './components/order/add-order/add-order.component';
import { AddOrderItemModalComponent } from './components/order/add-order-item-modal/add-order-item-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    StoresComponent,
    SingleStoreComponent,
    SingleProductComponent,
    CategoriesComponent,
    SingleCategoryComponent,
    LoginComponent,
    SignupComponent,
    BaseComponent,
    AddReviewComponent,
    OrdersComponent,
    AddOrderComponent,
    AddOrderItemModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
