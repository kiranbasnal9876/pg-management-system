import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const dashboardAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  
  if (token && token !== 'null' && token !== 'undefined' && token.trim() !== '') {
    return true;
  }
  
  router.navigate(['/log-in']);
  return false;
};
