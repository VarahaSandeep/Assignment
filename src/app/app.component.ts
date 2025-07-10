import { Component } from '@angular/core';
import html2pdf from 'html2pdf.js';
import { TabDataService } from './services/tab-data.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title='tab-layout-pdf';
  isDownloading = false;

  constructor(public tabService: TabDataService, private cdr: ChangeDetectorRef) {}

  downloadPDF() {
    this.isDownloading = true;

    setTimeout(() => {
      const content = document.getElementById('pdf-content');
      if (!content) return;

      const options = {
        margin: 10,
        filename: 'content.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'letter', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      };

      html2pdf().set(options).from(content).save().then(() => {
        
        this.isDownloading = false;
        this.cdr.detectChanges(); 
      });
    }, 100); 
  }
}
