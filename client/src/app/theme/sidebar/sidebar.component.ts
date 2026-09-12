import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private GF: GlobalService) {}

  @Output() logoutClick = new EventEmitter<void>();

  myMenu = [
    { menu: "Dashboard", icon_class: "bi bi-grid-1x2-fill", menu_url: "/dashboard" },
    { menu: "Client Master", icon_class: "bi bi-people-fill", menu_url: "/client-master" },
    { menu: "Property Master", icon_class: "bi bi-buildings-fill", menu_url: "/property-master" },
    { menu: "Rooms", icon_class: "bi bi-door-open-fill", menu_url: "/rooms" },
    { menu: "Tenant Directory", icon_class: "bi bi-person-badge-fill", menu_url: "/tenant" },
    { menu: "Complaints", icon_class: "bi bi-exclamation-octagon-fill", menu_url: "/complaints" },
    { menu: "Settings", icon_class: "bi bi-gear-fill", menu_url: "/setting" },
  ];

  logout(): void {
    this.logoutClick.emit();
    this.GF.logout();
  }
}
