import { Routes } from '@angular/router';
import { LogInComponent } from './pages/log-in/log-in.component';
import { TenantLogInComponent } from './pages/tenant-log-in/tenant-log-in.component';
import { dashboardAuthGuard } from './guards/dashboard-auth.guard';
import { logInAuthGuard } from './guards/log-in-auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'log-in',
        pathMatch: 'full'
    },
    {
        path: 'log-in',
        component: LogInComponent,
        canActivate: [logInAuthGuard]
    },
    {
        path: 'tenant-log-in',
        component: TenantLogInComponent,
        canActivate: [logInAuthGuard]
    },

    {
        path: '',
        loadComponent: () => import('./layout/layout.component').then(m => m.LayoutComponent),
        canActivate: [dashboardAuthGuard],
        children: [
            {
                path: 'dashboard',
                title: 'Dashboard',
                loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
            },
            {
                path: 'client-master',
                title: 'Client Master',
                loadComponent: () => import('./pages/client/client.component').then(m => m.ClientComponent)
            },
            {
                path: 'property-master',
                title: 'Property Master',
                loadComponent: () => import('./pages/property/property.component').then(m => m.PropertyComponent)
            },
            {
                path: 'rooms',
                title: 'Rooms',
                loadComponent: () => import('./pages/rooms/rooms.component').then(m => m.RoomsComponent)
            },
            {
                path: 'tenant',
                title: 'Tenant Directory',
                loadComponent: () => import('./pages/tenant/tenant.component').then(m => m.TenantComponent)
            },
            {
                path: 'complaints',
                title: 'Complaints',
                loadComponent: () => import('./pages/complaints/complaints.component').then(m => m.ComplaintsComponent)
            },
            {
                path: 'setting',
                title: 'Settings',
                loadComponent: () => import('./pages/setting/setting.component').then(m => m.SettingComponent)
            }
        ]
    },

    {
        path: '**',
        redirectTo: 'log-in'
    }
];
