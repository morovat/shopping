import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {convertMetaToOutput} from '@angular/compiler/src/render3/util';
import {LoginModel} from '../../model/login-model';
import {LoginService} from '../../services/login.service';
import {BaseService} from '../../services/base.service';
import {CookieService} from '../../services/cookie.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [BaseService , LoginService]
})
export class LoginComponent implements OnInit {
  private cookieValue: string;
  message = '';
  email = 'morovatparisa@gmail.com';
  pass = '09187867268';
  loading=false;
  @Output() messageToEmit = new EventEmitter<string>();
  constructor(private router: Router, private baseService: BaseService , private loginService: LoginService, private cookieService: CookieService) {
  }
  LoginModel() {}
  ngOnInit(): void {
    this.cookieService.set('login', 'our cookie value');
    this.cookieValue = this.cookieService.get('login');
  }
  onSubmit(f: NgForm) {
    this.loading=true;
    if (f.value.email == this.email && f.value.pass == this.pass) {
      this.message = 'ایمیل , رمز عبور صحیح است.';
      this.messageToEmit.emit(f.value.email);
      this.loading=false;
    } else {
      this.message = 'ایمیل یا رمز عبور اشتباه است.';
      this.loading=false;
    }
    // this.loginService.submit(f);
  }
}
