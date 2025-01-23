import { Injectable } from '@angular/core';
import {CookieServiceUtil} from "../cookie/cookie.service";

const isBrowser = typeof window !== 'undefined';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private cookieService: CookieServiceUtil,
  ) {
    console.log(isBrowser)
  }

  // Set a value in localStorage
  setItem(key: string, value: any): void {

    const stringValue = JSON.stringify(value);

    this.cookieService.setCookie(key, stringValue);
    localStorage.setItem(key, stringValue);
  }

  // Get a value from localStorage
  getItem<T>(key: string): T | null {
    let item = localStorage.getItem(key);

    if (item === undefined)  {
      item = this.cookieService.getCookie(key)
    }

    return item ? JSON.parse(item) : null;
  }

  // Remove an item from localStorage
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Clear all localStorage
  clear(): void {
    localStorage.clear();
  }
}
