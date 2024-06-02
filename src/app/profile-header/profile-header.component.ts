import { Component } from '@angular/core';
import {DarkModeService} from '../dark-mode.service'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.css'
})
export class ProfileHeaderComponent {
  
  isChecked: boolean = false;

  constructor(private DarkModeService: DarkModeService) {
    this.DarkModeService.isDarkMode$.subscribe(value => this.isChecked = value);

  }


  onCheckboxChange(event: any): void {
    this.DarkModeService.setDarkMode(event.target.checked);
    console.log(this.isChecked)
  }

}
