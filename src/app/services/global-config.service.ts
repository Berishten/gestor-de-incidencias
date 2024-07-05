import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalConfigService {
  private leftMenuIsOpen = false;

  openLeftMenu() {
    this.leftMenuIsOpen = !this.leftMenuIsOpen;
  }

  get isLeftMenuIsOpen() {
    return this.leftMenuIsOpen;
  }

  constructor() { }
}
