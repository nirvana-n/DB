import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Settings } from 'src/settings';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  base_url: string = Settings.API_ENDPOINT

  constructor(
    private http: HttpClient
  ) { }

  getAllOrders() {
    let _user: any = localStorage.getItem('user')
    let user = JSON.parse(_user)
    return this.http.get(this.base_url + 'order/' + '?user_id=' + user.id)
  }

  sendOrder(form_data: any) {
    return this.http.post(this.base_url + 'order/', form_data)
  }
}
