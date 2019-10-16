import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {
  // check( name: string ): boolean;
  constructor() { }

  // @ts-ignore
  set(name: string,
      value: string,
      expires?: number | Date,
      path?: string,
      domain?: string,
      secure?: boolean,
      sameSite?: 'Lax' | 'Strict' ): void;
  // @ts-ignore
  get( nam: string ): string;
  // delete( name: string,
  //         path?: string,
  //         domain?: string): void;

}
