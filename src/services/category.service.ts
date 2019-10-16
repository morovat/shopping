import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {BaseService} from './base.service';
import {NgForm} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories = [
    {id : 1 , photo: '../assets/images/1cat.png', title : 'اسکرابر' , des: 'توضیحات دسته بندی اول', number: 4},
    {id : 2 , photo: '../assets/images/2.png', title : 'واترجت' , des: 'توضیحات واترجت', number: 2}
  ]
  fileData: File = null;
  message;
  constructor(private baseService: BaseService) { }
  public getcategories(): any {
    const ordersObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.categories);
      }, 1000);
    });
    this.baseService.test();
    return ordersObservable;
  }
  addsubmit(f: NgForm){
    const formData = new FormData();
    formData.append('file', this.fileData);
    var existingIds = this.categories.map((obj) => obj.id);
    const checkRoleExistence = roleParam => this.categories.some( ({id}) => id == roleParam);
    if(checkRoleExistence(f.value.id)){
      this.categories.forEach((element, index) => {
        if (element.id === parseInt(f.value.id)) {
          this.categories[index] = f.value;
        };
      });
    }else {
      this.categories.push(f.value);
    }
    console.log(this.categories);
  }

  orderRemove(ido:number){
    this.categories.forEach((element, index) => {
      if (element.id == ido) {
        this.categories.splice(index,1);
      };
    });
  }
  previewFile(files) {
    this.message = '';
    if (files.length === 0) {
      return;
    }
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) === null) {
      this.message = 'Only images are supported.';
      return;
    }}
  catupload(event){
    this.fileData = <File>event.target.files[0];
    var reader  = new FileReader();
    reader.onloadend = function () {
      // preview.src = reader.result;
      document.getElementById("catImg").innerHTML="<img src='"+reader.result+"' class=\"img-responsive\">";
    }
    if (this.fileData) {
      reader.readAsDataURL(this.fileData); //reads the data as a URL
    } else {
      document.getElementById("catImg").innerHTML="<img  ngModel name='photo'  src='../assets/images/2.png'>";
    }
    // this.fileData = event.target.files[0];
    // this.previewFile(event.target.files);
    // this.categories.driver_avatar = this.fileData;
  }
}
