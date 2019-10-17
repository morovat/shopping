import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../../services/products.service';
import {ProductsModel} from '../../../model/products-model';
import {BaseService} from '../../../services/base.service';
import {OrdersService} from '../../../services/orders.service';
import {ActivatedRoute, Router} from '@angular/router';
import {OrdersModel} from '../../../model/orders-model';
import {NgForm} from '@angular/forms';
import {CategoryMode} from '../../../model/category-mode';
import {Select2OptionData} from 'ng-select2';
import { Options } from 'select2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: ProductsModel[];
  cat:Array<Select2OptionData>;
  public options: Options;
  idf=2;
  loading=false;
  constructor(private route: ActivatedRoute, private productsService:ProductsService,private baseService:BaseService , private routerb: Router) {
    this.products= [];
    this.cat = [
      {
        id: 'اسکرابر',
        text: 'اسکرابر'
      },
      {
        id: 'واترجت',
        text: 'واترجت'
      },
    ];
    this.options = {
      multiple: true,
      theme: 'classic',
      closeOnSelect: false,
      width: '300'
    };
  }

  ngOnInit() {
    this.loading=true;
    const productsObservable = this.productsService.getOrders();
    productsObservable.subscribe((productsData: ProductsModel[]) => {
      this.products = productsData;
      this.loading=false;
    });
    this.idf=this.route.params['value'].id;

  }

  onSubmit(f: NgForm){
    this.loading=true;
    this.productsService.addsubmit(f);
    this.routerb.navigate(['/products']);
  }

}
