import { CanActivateFn, CanMatchFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanMatchFn = () => {
  const authService = inject(AuthService);
  return (authService._usuario) ? true : false; 
};

