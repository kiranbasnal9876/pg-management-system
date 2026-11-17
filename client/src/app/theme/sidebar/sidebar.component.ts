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
  userRole: 'super_admin' | 'owner' | 'tenant' = 'owner';

  ngOnInit(): void {
    this.currentUser = this.GF.getUser();
    this.userRole = this.GF.getUserRole() || 'owner';
  }

  get myMenu() {
    // 1. Super Admin Menu
    if (this.userRole === 'super_admin') {
      return [
        { menu: "SaaS Dashboard", icon_class: "bi bi-speedometer2", menu_url: "/dashboard" },
        { menu: "Clients (PG Owners)", icon_class: "bi bi-people-fill", menu_url: "/client-master" },
        { menu: "Subscription Plans", icon_class: "bi bi-box-seam-fill", menu_url: "/plans" },
        { menu: "System Settings", icon_class: "bi bi-gear-fill", menu_url: "/setting" },
      ];
    }

    // 2. Tenant Menu
    if (this.userRole === 'tenant') {
      return [
        { menu: "My Dashboard", icon_class: "bi bi-speedometer2", menu_url: "/dashboard" },
        { menu: "Pay Rent (UPI / Cards)", icon_class: "bi bi-credit-card-2-front-fill", menu_url: "/pay-rent" },
        { menu: "My Complaints", icon_class: "bi bi-exclamation-octagon-fill", menu_url: "/complaints" },
        { menu: "Profile / Settings", icon_class: "bi bi-person-circle", menu_url: "/setting" },
      ];
    }

    // 3. PG Owner (Client) Menu
    return [
      { menu: "Dashboard", icon_class: "bi bi-grid-1x2-fill", menu_url: "/dashboard" },
      { menu: "Property Master", icon_class: "bi bi-buildings-fill", menu_url: "/property-master" },
      { menu: "Rooms", icon_class: "bi bi-door-open-fill", menu_url: "/rooms" },
      { menu: "Tenant Directory", icon_class: "bi bi-person-badge-fill", menu_url: "/tenant" },
      { menu: "Complaints", icon_class: "bi bi-exclamation-octagon-fill", menu_url: "/complaints" },
      { menu: "Settings", icon_class: "bi bi-gear-fill", menu_url: "/setting" },
    ];
  }

  logout(): void {
    this.logoutClick.emit();
    this.GF.logout();
  }
}
