import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Settings } from 'src/settings';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  base_url: string = Settings.API_ENDPOINT

  constructor(private http: HttpClient) { }

  login(form_data: any) {
    return this.http.post(this.base_url + 'user/login/', form_data)
  }

  signup(form_data: any) {
    return this.http.post(this.base_url + 'user/signup/', form_data)
  }
}
