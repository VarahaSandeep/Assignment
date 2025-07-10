import { Component } from '@angular/core';
import { TabDataService } from '../../services/tab-data.service';

@Component({
  selector: 'app-tab-list',
  standalone: false,
  templateUrl: './tab-list.component.html',
  styleUrl: './tab-list.component.css'
})
export class TabListComponent {

  tabs:any[]=[]
  constructor(private tabDataService:TabDataService){
    this.tabs=this.tabDataService.getTabs();
  }
  selectTab(index: number) {
    this.tabDataService.setTab(index);
  }
  
}
