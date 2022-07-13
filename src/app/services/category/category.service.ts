import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Settings } from 'src/settings';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  base_url: string = Settings.API_ENDPOINT

  constructor(private http: HttpClient) { }

  getAllCategories() {
    return this.http.get(this.base_url + 'category')
  }

  getCategoryProducts(name: string) {
    return this.http.get(this.base_url + 'category/' + name)
  }
}
