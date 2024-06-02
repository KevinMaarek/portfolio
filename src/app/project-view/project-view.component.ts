import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PMakeflixComponent } from '../p-makeflix/p-makeflix.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-view',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, PMakeflixComponent],
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent {
  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(PMakeflixComponent, {
      width: '900px',
      height:'770px',
      
    });
  }
}
