import { Component } from '@angular/core';
import { TabDataService } from '../../services/tab-data.service';

@Component({
  selector: 'app-tab-content',
  standalone: false,
  templateUrl: './tab-content.component.html',
  styleUrl: './tab-content.component.css'
})
export class TabContentComponent {
  tab: any;

  constructor(private tabService: TabDataService) {}

  ngOnInit(): void {
    this.tabService.selectedIndex$.subscribe(index => {
      this.tab = this.tabService.getTabs()[index];
      console.log(this.tab.image);
    });
  }

}
