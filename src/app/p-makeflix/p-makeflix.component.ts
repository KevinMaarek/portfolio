import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import {DarkModeService} from '../dark-mode.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-p-makeflix',
  standalone: true,
  imports: [MatDialogModule,CommonModule],
  templateUrl: './p-makeflix.component.html',
  styleUrl: './p-makeflix.component.css'
})
export class PMakeflixComponent {

  constructor(private DarkModeService : DarkModeService) { }

  isDarkMode = this.DarkModeService.isDarkMode$

}
