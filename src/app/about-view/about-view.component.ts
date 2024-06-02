import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DarkModeService} from '../dark-mode.service';

@Component({
  selector: 'app-about-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-view.component.html',
  styleUrl: './about-view.component.css'
})
export class AboutViewComponent {
  constructor(private DarkModeService : DarkModeService) { }

  isDarkMode = this.DarkModeService.isDarkMode$

  downloadFile() {
    // Path to your file in the assets folder
    const filePath = '../../assets/cv-kevin maarek.docx';

    // Fetch the file
    fetch(filePath)
      .then(response => response.blob())
      .then(blob => {
        // Create a download link
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'cv-kevin maarek.docx';

        // Simulate clicking the download link
        link.click();

        // Clean up
        window.URL.revokeObjectURL(link.href);
      })
      .catch(error => console.error('Error downloading the file:', error));
  }
}
