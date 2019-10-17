import { Component, OnInit } from '@angular/core';
import {OrdersModel} from '../../model/orders-model';
import {BaseService} from '../../services/base.service';
import {CategoryService} from '../../services/category.service';
import {CategoryMode} from '../../model/category-mode';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  selectedCheckbox;
  categories : CategoryMode[] ;
  loading = false;
  sortBy='';
  searchText;
  constructor(private baseService: BaseService , private categoryService:CategoryService) {
    this.categories=[];
  }

  ngOnInit() {
    this.loading=true;
    const catObservable = this.categoryService.getcategories();
    catObservable.subscribe((catData: CategoryMode[]) => {
      this.categories = catData;
      this.loading=false;
    });
  }
  checked(id: number){
    this.selectedCheckbox = id;
  }
  remove(id:number){
    this.loading=true;
    this.categoryService.orderRemove(id);
    this.loading=false;
  }
  sorting($event){
    this.sortBy=$event;
  }
}
