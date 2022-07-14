import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Settings } from '../../../settings'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  header: HttpHeaders | any = null

  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }
  base_url: string = Settings.API_ENDPOINT

  getProducts() {
    console.log("base url: ", this.base_url);

    return this.http.get(this.base_url + 'product/', { headers: this.header })
  }

  getSingleProduct(title: string) {
    return this.http.get(this.base_url + 'product/' + title, { headers: this.header, observe: 'response' })
  }

  sortProducts(by: string) {
    return this.http.get(this.base_url + 'product/?sort=' + by, { headers: this.header })
  }

  getProductReviews(name: string) {
    return this.http.get(this.base_url + 'product/' + name + '/review')
  }

  postProductReview(form_data: any) {
    return this.http.post(this.base_url + 'product/' + form_data.product_name + '/review/', form_data.data)
  }
}
