import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Observable} from 'rxjs';
import {SettingsService} from '../services/settings.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'shopping';
  receivedChildMessage: string;
  lng: string = 'fa';
  class:string='rtl';
  activeMenu;
  private toggle : boolean = false;
  getMessage(message: string) {
    this.receivedChildMessage = message;
    // alert("message:"+this.receivedChildMessage);
  }
  constructor(private route: ActivatedRoute,private translate: TranslateService,private settings: SettingsService) {
    this.activeMenu=this.route.params['value'];
    console.log(this.activeMenu);
    if(localStorage.getItem('login')){
      this.receivedChildMessage= localStorage.getItem('login');
    }
    if (!localStorage.getItem('lang')) {
      translate.setDefaultLang(this.lng);
      translate.use(this.lng);
      localStorage.setItem('lang',this.lng);
    }else{
      this.lng=localStorage.getItem('lang');
      translate.use(localStorage.getItem('lang'));
      if (localStorage.getItem('lang')=='fa'){
        this.class='rtl';
      }else{
        this.class='ltr';
      }
    }
  }
  // $('#side-menu li a').click(function(event){
  //   $('.active').removeClass('active');
  //   $(this).addClass('active');
  //   event.preventDefault();
  // })
  langChange(event:any){

    this.translate.use(event.target.value);
    localStorage.setItem('lang',event.target.value);
    if (event.target.value=='fa'){
      this.class='rtl';
    }else{
      this.class='ltr';
    }
  }
  logout(){
    localStorage.remove('login');
  }

  // $( '#topheader .navbar-nav a' ).on( 'click', function () {
  //   $( '#topheader .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
  //   $( this ).parent( 'li' ).addClass( 'active' );
  // });
  activeM(event){
    $( '#side-menu' ).find( 'li .active' ).removeClass( 'active' );
    this.toggle != this.toggle;
  }
}
