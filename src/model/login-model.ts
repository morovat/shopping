import {EventEmitter, Output} from '@angular/core';
import {BaseModel} from '../model/base-model';

export class LoginModel{
  message: string;
  email: string;
  pass: string;
}
