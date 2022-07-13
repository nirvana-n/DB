import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Settings } from 'src/settings';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  base_url: string = Settings.API_ENDPOINT

  constructor(private http: HttpClient) { }

  getAllStores() {
    return this.http.get(this.base_url + 'store')
  }

  getSingleStore(name: any) {
    return this.http.get(this.base_url + 'store/' + name)
  }
}
