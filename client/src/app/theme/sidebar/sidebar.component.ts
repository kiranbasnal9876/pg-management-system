import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GlobalService } from '../../services/global.service';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  constructor(public GF: GlobalService) {}

  @Output() logoutClick = new EventEmitter<void>();

  currentUser: any = null;
  userRole: 'tenant' | 'owner' = 'owner';

  ngOnInit(): void {
    this.currentUser = this.GF.getUser();
    this.userRole = this.GF.getUserRole() || 'owner';
  }

  get myMenu() {
    if (this.userRole === 'tenant') {
      return [
        { menu: "My Dashboard", icon_class: "bi bi-speedometer2", menu_url: "/dashboard" },
        { menu: "Pay Rent (Razorpay)", icon_class: "bi bi-credit-card-2-front-fill", menu_url: "/pay-rent" },
        { menu: "Complaints", icon_class: "bi bi-exclamation-octagon-fill", menu_url: "/complaints" },
        { menu: "Profile / Settings", icon_class: "bi bi-person-circle", menu_url: "/setting" },
      ];
    }

    return [
      { menu: "Dashboard", icon_class: "bi bi-grid-1x2-fill", menu_url: "/dashboard" },
      { menu: "Tenant Directory", icon_class: "bi bi-person-badge-fill", menu_url: "/tenant" },
      { menu: "Rooms", icon_class: "bi bi-door-open-fill", menu_url: "/rooms" },
      { menu: "Property Master", icon_class: "bi bi-buildings-fill", menu_url: "/property-master" },
      { menu: "Complaints", icon_class: "bi bi-exclamation-octagon-fill", menu_url: "/complaints" },
      { menu: "Client Master", icon_class: "bi bi-people-fill", menu_url: "/client-master" },
      { menu: "Settings", icon_class: "bi bi-gear-fill", menu_url: "/setting" },
    ];
  }

  logout(): void {
    this.logoutClick.emit();
    this.GF.logout();
  }
}
