import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from 'src/app/models/store';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'app-single-store',
  templateUrl: './single-store.component.html',
  styleUrls: ['./single-store.component.css']
})
export class SingleStoreComponent implements OnInit {
  store!: any

  constructor(private route: ActivatedRoute, private store_service: StoreService, private router: Router
  ) { }

  ngOnInit(): void {
    let name = this.getStoreId()
    console.log("name: ", name);

    this.getSingleStore(name)
  }

  private getStoreId() {
    console.log("-----", this.route.snapshot.params);

    return this.route.snapshot.params['name']
  }

  private getSingleStore(name: any) {
    this.store_service.getSingleStore(name).subscribe(
      (res: any) => {
        console.log("res: ", res);

        this.store = res
      }
    )
  }

  goToProduct(product: any) {
    this.router.navigate(['/product', product.name])
  }
}
