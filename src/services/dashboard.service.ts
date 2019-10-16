import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {BaseService} from './base.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  orders = [
    {id: 1 , customer: 'علی اسدی', statuse: 'در انتظار بررسی', Total: '1200 تومان'},
    {id: 2 , customer: 'سحر محمدی', statuse: 'ثبت شده', Total: '15000 تومان'},
    {id: 3 , customer: 'سارا اسدی', statuse: 'در انتظار بررسی', Total: '200 تومان'}
  ]
  constructor(private baseService: BaseService) { }

  public getStudents(): any {
    const ordersObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.orders);
      }, 1000);
    });
    this.baseService.test();
    return ordersObservable;
  }
}
