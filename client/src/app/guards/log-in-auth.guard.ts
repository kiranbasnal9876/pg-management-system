import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const logInAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  
  if (token && token !== 'null' && token !== 'undefined' && token.trim() !== '') {
    router.navigate(['/dashboard']);
    return false;
  }
  
  return true;
};
