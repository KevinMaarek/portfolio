import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { ViewToggleService } from '../view-toggle.service';
import {DarkModeService} from '../dark-mode.service';

@Component({
  selector: 'app-profile-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-menu.component.html',
  styleUrl: './profile-menu.component.css'
})
export class ProfileMenuComponent {

  constructor(private viewToggleService: ViewToggleService, private DarkModeService : DarkModeService) {}

  isDarkMode = this.DarkModeService.isDarkMode$ 
  buttonState: boolean = true


  showProjectView() {
    this.viewToggleService.setProjectView(true);
    this.buttonState = true
  }

  showAboutView() {
    this.viewToggleService.setProjectView(false);
    this.buttonState = false


  }

}
