import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { GlobalService } from '../../services/global.service';
import { ThemeService, Theme } from '../../services/theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent implements OnInit {

  loginForm: FormGroup;
  showPassword: boolean = false;
  loading: boolean = false;
  currentTheme: Theme = 'dark';
  selectedRole: 'super_admin' | 'owner' = 'owner';

  constructor(
    private api: ApiService,
    private GF: GlobalService,
    private themeService: ThemeService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.themeService.theme$.subscribe(t => this.currentTheme = t);
  }

  setRole(role: 'super_admin' | 'owner'): void {
    this.selectedRole = role;
    this.loginForm.reset();
  }

  toggleTheme(): void {
    const next = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.themeService.setTheme(next);
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  quickFillSuperAdminDemo(): void {
    this.selectedRole = 'super_admin';
    this.loginForm.patchValue({
      email: 'superadmin@gmail.com',
      password: 'Admin@123'
    });
    this.loginForm.markAllAsTouched();
    this.GF.showToast('Super Admin demo credentials filled!', 'info');
  }

  quickFillDemo(): void {
    this.selectedRole = 'owner';
    this.loginForm.patchValue({
      email: 'dimpalbasnal0@gmail.com',
      password: 'Owner@123'
    });
    this.loginForm.markAllAsTouched();
    this.GF.showToast('Demo Owner credentials filled!', 'info');
  }

  onSubmit(): void {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      this.loading = true;
      const endpoint = this.selectedRole === 'super_admin' ? 'super-admin-login' : 'pg-owner-login';
      this.api.postApi(endpoint, this.loginForm.value).subscribe({
        next: (res: any) => {
          this.loading = false;
          if (res.status) {
            localStorage.setItem('token', res.token);
            const userRole = res.role || this.selectedRole;
            localStorage.setItem('user_role', userRole);
            if (res.user) {
              localStorage.setItem('user_data', JSON.stringify(res.user));
            }
            this.GF.showToast(res.message, 'success');
            this.router.navigate(['/dashboard']);
          } else {
            this.GF.showToast(res.message, 'danger');
          }
        },
        error: (err: any) => {
          this.loading = false;
          this.GF.showToast(err.error?.message || 'Login failed', 'danger');
        }
      });
    }
  }

}
