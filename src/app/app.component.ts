import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';
  user: any = null
  

  constructor(private router: Router) { }

  logout() {
    console.log("here");
    
    localStorage.removeItem('user')
    this.router.navigate(['/login'])
  }

  ngDoCheck() {
    let _user: any = localStorage.getItem('user')
    this.user = JSON.parse(_user)
  }
}
