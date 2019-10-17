import { Component, OnInit } from '@angular/core';
import {BaseService} from '../../../services/base.service';
import {OrdersService} from '../../../services/orders.service';
import {OrdersModel} from '../../../model/orders-model';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Select2OptionData} from 'ng-select2';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  dateObject = "";
  orders: OrdersModel[];
  idf=2;
  loading=false;
  paymentM:Array<Select2OptionData>;
  statuse:Array<Select2OptionData>;
  constructor(private route: ActivatedRoute, private baseService: BaseService , private ordersService: OrdersService , private routerb: Router) {
    this.orders= [];
    this.paymentM = [{id: 'زرین پال', text: 'زرین پال'},{id: 'بانک تجارت',text: 'بانک تجارت'}];
    this.statuse = [{id: 'ایجاد شده',text: 'ایجاد شده'},{id: 'تایید شده',text: 'تایید شده'},{id: 'لغو شده',text: 'لغو شده'},{id: 'استرداد شده',text: 'استرداد شده'},{id: 'ارسال شده', text: 'ارسال شده'}];
  }

  ngOnInit() {
    this.loading=true;
    const ordersObservable = this.ordersService.getOrders();
    ordersObservable.subscribe((ordersData: OrdersModel[]) => {
      this.orders = ordersData;
      this.loading=false;
    });
    this.idf=this.route.params['value'].id;
  }

  onSubmit(f: NgForm){
    this.ordersService.addsubmit(f);
    this.routerb.navigate(['/orders']);
  }

}
