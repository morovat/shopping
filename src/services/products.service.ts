import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {Observable} from 'rxjs';
import {NgForm} from '@angular/forms';
import * as moment from 'jalali-moment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = [
    {id : 1 , photo: '../assets/images/1cat.png', title : 'واترجت صنعتی' , des: 'توضیحات دسته بندی اول', price: '200000' , cat : ' واترجت' , date : '1396-01-11'},
    {id : 2 , photo: '../assets/images/2.png', title : 'اسکرابر' , des: 'توضیحات واترجت صنعتی', price: '500000' , cat : 'اسکرابر' , date : '1398-05-20'}
  ]
  constructor(private baseService: BaseService) { }
  public getOrders(): any {
    const productsObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.products);
      }, 1000);
    });
    this.baseService.test();
    return productsObservable;
  }
  addsubmit(f: NgForm){
    var existingIds = this.products.map((obj) => obj.id);

    const checkRoleExistence = roleParam => this.products.some( ({id}) => id == roleParam);
    if(checkRoleExistence(f.value.id)){
      this.products.forEach((element, index) => {
        if(element.date != f.value.date){
        }
        if (element.id === parseInt(f.value.id)) {
          this.products[index] = f.value;
        };
      });
    }else {
      this.products.push(f.value);
    }
  }
  orderRemove(ido:number){
    this.products.forEach((element, index) => {
      if (element.id == ido) {
        this.products.splice(index,1);
      };
    });
  }
}
