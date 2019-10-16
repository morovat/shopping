import { Component, OnInit } from '@angular/core';
import {DashboardModel} from '../../model/dashboard-model';
import {OrdersModel} from '../../model/orders-model';
import {ReportsModel} from '../../model/reports-model';
import {BaseService} from '../../services/base.service';
import {DashboardService} from '../../services/dashboard.service';
import {OrdersService} from '../../services/orders.service';
import {ReportsService} from '../../services/reports.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  orders: OrdersModel[] = [];
  reports: ReportsModel[] = [];
  public loading=true;
  constructor(private baseService: BaseService , private ordersService: OrdersService , private reportsService: ReportsService) {
  }
  ngOnInit() {
    const ordersObservable = this.ordersService.getOrders();
    ordersObservable.subscribe((ordersData: OrdersModel[]) => {
      this.orders = ordersData;
      this.loading=false;
    });

    const reportsObservable = this.reportsService.getReports();
    reportsObservable.subscribe((reportsData: ReportsModel[]) => {
      this.reports = reportsData;
      this.loading=false;
    });
  }
}
