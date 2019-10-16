import { Injectable } from '@angular/core';
import {CookieService} from './cookie.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  defaultLanguage: string = 'en';
  class:string='ltr';
  constructor() {}
}
