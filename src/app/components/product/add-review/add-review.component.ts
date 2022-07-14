import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  form: FormGroup | null = null
  user: any = null

  star_1: boolean = false
  star_2: boolean = false
  star_3: boolean = false
  star_4: boolean = false
  star_5: boolean = false

  get review() { return this.form?.get('review') }
  get rate() { return this.form?.get('rate') }

  constructor(
    private fb: FormBuilder,
    public active_modal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    this.getUser()
    this.generateForm()
  }

  private getUser() {
    let _user: any = localStorage.getItem('user')
    if (_user)
      this.user = JSON.parse(_user)

    console.log("get user: ", this.user);

  }

  private generateForm() {
    this.form = this.fb.group({
      user: [this.user.id],
      review: [''],
      rate: [null]
    })
  }

  addRate(rate: any) {
    this.rate?.setValue(rate)

    switch (rate) {
      case 1:
        this.star_1 = true
        this.star_2 = false
        this.star_3 = false
        this.star_4 = false
        this.star_5 = false
        break

      case 2:
        this.star_1 = true
        this.star_2 = true
        this.star_3 = false
        this.star_4 = false
        this.star_5 = false
        break

      case 3:
        this.star_1 = true
        this.star_2 = true
        this.star_3 = true
        this.star_4 = false
        this.star_5 = false
        break

      case 4:
        this.star_1 = true
        this.star_2 = true
        this.star_3 = true
        this.star_4 = true
        this.star_5 = false
        break

      case 5:
        this.star_1 = true
        this.star_2 = true
        this.star_3 = true
        this.star_4 = true
        this.star_5 = true
        break
    }
  }

}
