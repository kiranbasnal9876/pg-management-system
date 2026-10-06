import { Component, EventEmitter, Output, OnInit, HostListener } from '@angular/core';
import { ThemeService, Theme } from '../../services/theme.service';
import { GlobalService } from '../../services/global.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor(
    private themeService: ThemeService,
    private GF: GlobalService
  ) {}

  currentTheme: Theme = 'system';
  sidebarVisible: boolean = true;
  currentUser: any = null;
  userRole: 'tenant' | 'owner' = 'owner';

  @Output() sidebarToggle = new EventEmitter<boolean>();

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
    this.sidebarToggle.emit(this.sidebarVisible);
  }

  ngOnInit(): void {
    this.currentUser = this.GF.getUser();
    this.userRole = this.GF.getUserRole() || 'owner';

    this.themeService.theme$.subscribe(theme => {
      this.currentTheme = theme;
    });
    
    // Initialize with saved theme
    const savedTheme = localStorage.getItem('app-theme') as Theme;
    if (savedTheme) {
      this.themeService.setTheme(savedTheme);
    } else {
      this.themeService.setTheme('system');
    }
  }

  toggleTheme(): void {
    const nextTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.themeService.setTheme(nextTheme);
  }

  logout(): void {
    this.GF.logout();
  }
}