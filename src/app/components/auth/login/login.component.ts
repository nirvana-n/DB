import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  get username() {return this.form?.get('username')}
  get password() {return this.form?.get('password')}


  form: FormGroup | null = null

  constructor(private fb: FormBuilder, private auth_service: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.generateForm()
  }

  private generateForm() {
    this.form = this.fb.group({
      username: [''],
      password: ['']
    })
  }

  login() {
    this.auth_service.login(this.form?.value).subscribe(
      (res: any) => {
        let user = JSON.stringify(res)
        localStorage.setItem('user', user)

        this.router.navigate([''])
      }
    )
  }

}
