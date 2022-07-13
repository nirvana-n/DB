import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from 'src/app/models/store';
import { ProductService } from 'src/app/services/product/product.service';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {
  stores: Store[] | null = null

  constructor(private store_service: StoreService, private router: Router) { }

  ngOnInit(): void {
    this.getAllStores()
  }

  private getAllStores() {
    this.store_service.getAllStores().subscribe(
      (res: any) => {
        this.stores = res
      }
    )
  }

  goToStore(store: Store) {
    this.router.navigate(['/store', store.name])
  }

}
