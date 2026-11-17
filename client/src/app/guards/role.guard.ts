import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { GlobalService } from '../services/global.service';

/**
 * Guard restricted exclusively to Super Administrator
 */
export const superAdminGuard: CanActivateFn = () => {
  const router = inject(Router);
  const GF = inject(GlobalService);
  const role = GF.getUserRole();

  if (role === 'super_admin') {
    return true;
  }

  GF.showToast('Access restricted: Super Administrator credentials required.', 'warning');
  router.navigate(['/dashboard']);
  return false;
};

/**
 * Guard restricted to PG Owners (Super Admin may also inspect)
 */
export const ownerGuard: CanActivateFn = () => {
  const router = inject(Router);
  const GF = inject(GlobalService);
  const role = GF.getUserRole();

  if (role === 'owner' || role === 'super_admin') {
    return true;
  }

  GF.showToast('Access restricted to PG Owners.', 'warning');
  router.navigate(['/dashboard']);
  return false;
};

/**
 * Guard restricted to Tenants (Residents)
 */
export const tenantGuard: CanActivateFn = () => {
  const router = inject(Router);
  const GF = inject(GlobalService);
  const role = GF.getUserRole();

  if (role === 'tenant') {
    return true;
  }

  GF.showToast('Access restricted to Residents.', 'warning');
  router.navigate(['/dashboard']);
  return false;
};
