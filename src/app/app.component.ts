import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileHeaderComponent } from "./profile-header/profile-header.component";
import { ProfileMenuComponent } from "./profile-menu/profile-menu.component";
import { ProjectViewComponent } from "./project-view/project-view.component";
import { AboutViewComponent } from "./about-view/about-view.component";
import { ViewToggleService } from '../app/view-toggle.service';
import {DarkModeService} from '../app/dark-mode.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ProfileHeaderComponent, ProfileMenuComponent, ProjectViewComponent, AboutViewComponent,CommonModule],
    
})
export class AppComponent {

    isProjectView$ = this.viewToggleService.isProjectView$;

    isDarkMode = this.darkModeService.isDarkMode$;

  constructor(private viewToggleService: ViewToggleService, private darkModeService:DarkModeService) {}

  title = 'portfolio2';
}
