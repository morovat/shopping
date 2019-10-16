import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Observable} from 'rxjs';
import {SettingsService} from '../services/settings.service';

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
  getMessage(message: string) {
    this.receivedChildMessage = message;
  }
  constructor(private translate: TranslateService,private settings: SettingsService) {
    translate.setDefaultLang(this.lng);
    translate.use(this.lng);
  }
  langChange(event:any){
    this.translate.use(event.target.value);
    if (event.target.value=='fa'){
      this.class='rtl';
    }else{
      this.class='ltr';
    }
  }

}
