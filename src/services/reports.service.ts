import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {BaseService} from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  reports = [
    {sales: '100', Registered: '0', Return: '1200', Items : '0' }
  ]
  constructor(private baseService: BaseService) { }
  public getReports(): any {
    const reportssObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.reports);
      }, 1000);
    });
    this.baseService.test();
    return reportssObservable;
  }
}
