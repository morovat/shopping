import { Component, OnInit } from '@angular/core';
import {OrdersModel} from '../../model/orders-model';
import {ProductsModel} from '../../model/products-model';
import {ProductsService} from '../../services/products.service';
import * as moment from 'jalali-moment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  selectedCheckbox;
  products: ProductsModel[];
  loading=false;
  sortBy='';
  searchText;
  constructor(private productsService:ProductsService) {
    this.products= [];
  }
  ngOnInit() {
    this.loading=true;
    const productsObservable = this.productsService.getOrders();
    productsObservable.subscribe((productsData: ProductsModel[]) => {
      this.products = productsData;
      this.loading=false;
    });

  }
  checked(id: number){
    this.selectedCheckbox = id;
  }
  remove(id:number){
    this.productsService.orderRemove(id);
  }
  sorting($event){
    this.sortBy=$event;
  }
}
