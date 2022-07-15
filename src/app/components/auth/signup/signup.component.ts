import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: FormGroup | null = null

  get username() { return this.form?.get('username') }
  get password() { return this.form?.get('password') }
  get firstname() { return this.form?.get('firstname') }
  get lastname() { return this.form?.get('lastname') }
  get phone() { return this.form?.get('phone') }

  constructor(private fb: FormBuilder, private auth__service: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.generateForm()
  }

  private generateForm() {
    this.form = this.fb.group({
      username: [''],
      password: [''],
      phone: [''],
      firstname: [''],
      lastname: ['']
    })
  }

  signup() {
    this.auth__service.signup(this.form?.value).subscribe(
      (res: any) => {
        localStorage.setItem('user', JSON.stringify(res))
        let user: any = localStorage.getItem('user')
        this.router.navigate([''])
      }
    )
  }

}
