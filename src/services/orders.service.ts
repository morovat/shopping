import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {BaseService} from './base.service';
import {NgForm} from '@angular/forms';
import * as moment from 'jalali-moment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  orders = [
    {id: 1 , faktor: 'Y21' , customer: 'علی اسدی', statuse: 'ایجاد شده', total: '1200 ' , paymentMethod: 'زرین پال', createDate: '1398-07-16', finalChange : '1398-07-17',  finalDate : '1398-07-17'},
    {id: 2 , faktor: 'Y22' , customer: 'سحر محمدی', statuse: 'تایید شده', total: '15000 ' , paymentMethod: 'زرین پال', createDate: '1398-07-18', finalChange : '1398-07-17',  finalDate : '1398-07-17'},
    {id: 3 , faktor: 'Y23' , customer: 'سارا اسدی', statuse: 'ارسال شده', total: '200 ' , paymentMethod: 'زرین پال', createDate: '1398-07-15', finalChange : '1398-07-17',  finalDate : '1398-07-17'},
  ]
  constructor(private baseService: BaseService) { }
  public getOrders(): any {
    const ordersObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.orders);
        // this.loading=true;
      }, 1000);
    });
    this.baseService.test();
    return ordersObservable;
  }
  addsubmit(f: NgForm){
    // this.orders.push(f.value);
    var existingIds = this.orders.map((obj) => obj.id);
    const checkRoleExistence = roleParam => this.orders.some( ({id}) => id == roleParam);
    if(checkRoleExistence(f.value.id)){
      this.orders.forEach((element, index) => {
        if (element.id === parseInt(f.value.id)) {
          f.value.date=moment(f.value.createDate).format('jYYYY-jMM-jDD');
          f.value.date=moment(f.value.finalChange).format('jYYYY-jMM-jDD');
          f.value.date=moment(f.value.finalDate).format('jYYYY-jMM-jDD');
          this.orders[index] = f.value;
        };
      });
    }else {
      f.value.date=moment(f.value.createDate).format('jYYYY-jMM-jDD');
      f.value.date=moment(f.value.finalChange).format('jYYYY-jMM-jDD');
      f.value.date=moment(f.value.finalDate).format('jYYYY-jMM-jDD');
      this.orders.push(f.value);
    }
  }
  orderRemove(ido:number){
    this.orders.forEach((element, index) => {
      if (element.id == ido) {
        this.orders.splice(index,1);
      };
    });
  }
}
