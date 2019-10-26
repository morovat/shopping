import { Component, OnInit } from '@angular/core';
import {OrdersModel} from '../../model/orders-model';
import {BaseService} from '../../services/base.service';
import {OrdersService} from '../../services/orders.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
selectedCheckbox;
  orders: OrdersModel[];
  loading=false;
  sortBy='';
  searchText;
  constructor(private baseService: BaseService , private ordersService: OrdersService) {
    this.orders= [];
  }

  ngOnInit() {
    this.loading=true;
    const ordersObservable = this.ordersService.getOrders();
    ordersObservable.subscribe((ordersData: OrdersModel[]) => {
      this.orders = ordersData;
      this.loading=false;
    });
  }
  checked(id: number){
  this.selectedCheckbox = id;
  }
  remove(id:number){
    this.ordersService.orderRemove(id);
  }
  sorting($event){
    this.sortBy=$event;
  }
  clearSearch(){
    this.searchText='';
  }
}
