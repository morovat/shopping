import { Component, OnInit } from '@angular/core';
import {BaseService} from '../../../services/base.service';
import {OrdersService} from '../../../services/orders.service';
import {OrdersModel} from '../../../model/orders-model';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

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
  constructor(private route: ActivatedRoute, private baseService: BaseService , private ordersService: OrdersService , private routerb: Router) {
    this.orders= [];
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
