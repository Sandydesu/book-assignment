import { Injectable } from '@angular/core';

@Injectable()
export class WebstorageService {
  constructor() {}

  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
}
