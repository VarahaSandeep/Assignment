import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabDataService {

  constructor() { }

  tabs=[
    {title: 'Tab 1',
     content:`Welcome, To know more about Angular click on the link. <a href="https://angular.io" target="_blank">Angular Docs</a>`,
     image: 'assets/images/Angular.jpeg' 
    },
    {
      title: 'Tab 2',
      content: `Welcome, To know more about Google click on the link. <a href="https://google.com" target="_blank">Google</a>`,
      image: 'assets/images/Google.png' 
    },
    {
      title: 'Tab 3',
      content: `Welcome, To know more about Github click on the link. <a href="https://github.com" target="_blank">GitHub</a>`,
      image: 'assets/images/Github.png' 
    }
  ];

  private selectedIndexSubject = new BehaviorSubject<number>(0);
  selectedIndex$=this.selectedIndexSubject.asObservable();

  setTab(index: number) {
    this.selectedIndexSubject.next(index);
  }

  getTabs() {
    return this.tabs;
  }
}
