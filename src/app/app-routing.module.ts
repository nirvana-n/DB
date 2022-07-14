import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { BaseComponent } from './components/base/base.component';
import { CategoriesComponent } from './components/category/categories/categories.component';
import { SingleCategoryComponent } from './components/category/single-category/single-category.component';
import { ProductsComponent } from './components/product/products/products.component';
import { SingleProductComponent } from './components/product/single-product/single-product.component';
import { SingleStoreComponent } from './components/store/single-store/single-store.component';
import { StoresComponent } from './components/store/stores/stores.component';

const routes: Routes = [
  { path: '', component: BaseComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product/:name', component: SingleProductComponent },
  { path: 'stores', component: StoresComponent },
  { path: 'store/:name', component: SingleStoreComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'category/:name', component: SingleCategoryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
