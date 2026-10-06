import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { GlobalService } from '../../services/global.service';
import { ThemeService, Theme } from '../../services/theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tenant-log-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './tenant-log-in.component.html',
  styleUrl: './tenant-log-in.component.css'
})
export class TenantLogInComponent implements OnInit {

  loginForm: FormGroup;
  showPassword: boolean = false;
  loading: boolean = false;
  currentTheme: Theme = 'dark';

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

  toggleTheme(): void {
    const next = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.themeService.setTheme(next);
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  quickFillDemo(): void {
    this.loginForm.patchValue({
      email: 'tenant@demo.com',
      password: 'Tenant@123'
    });
    this.loginForm.markAllAsTouched();
    this.GF.showToast('Demo Tenant credentials filled!', 'info');
  }

  onSubmit(): void {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      this.loading = true;
      this.api.postApi('tenant-login', this.loginForm.value).subscribe({
        next: (res: any) => {
          this.loading = false;
          if (res.status) {
            localStorage.setItem('token', res.token);
            localStorage.setItem('user_role', 'tenant');
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
          this.GF.showToast(err.error?.message || 'Tenant login failed', 'danger');
        }
      });
    }
  }

}
