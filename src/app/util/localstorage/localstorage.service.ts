import { Injectable } from '@angular/core';

const isBrowser = typeof window !== 'undefined';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
    console.log(isBrowser)
  }

  // Set a value in localStorage
  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Get a value from localStorage
  getItem<T>(key: string): T | null {
    const item = localStorage.getItem(key);
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
