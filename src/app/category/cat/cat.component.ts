import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {OrdersModel} from '../../../model/orders-model';
import {ActivatedRoute, Router} from '@angular/router';
import {BaseService} from '../../../services/base.service';
import {OrdersService} from '../../../services/orders.service';
import {CategoryMode} from '../../../model/category-mode';
import {CategoryService} from '../../../services/category.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent implements OnInit {
  dateObject = "";
  cats: CategoryMode[];
  idf=0;
  loading=false;
  constructor(private route: ActivatedRoute, private baseService: BaseService , private categoryService: CategoryService , private routerb: Router) {
    this.cats= [];
  }

  ngOnInit() {
    this.loading=true;
    const catObservable = this.categoryService.getcategories();
    catObservable.subscribe((catData: CategoryMode[]) => {
      this.cats = catData;
      this.loading=false;
    });
    this.idf=this.route.params['value'].id;
  }

  onSubmit(f: NgForm){
    this.loading=true;
    this.categoryService.addsubmit(f);
    this.routerb.navigate(['/category']);
  }
  upload(event){
    this.categoryService.catupload(event);
  }
}
