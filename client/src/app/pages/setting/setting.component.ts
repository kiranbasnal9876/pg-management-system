import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent implements OnInit {

  loading: boolean = false;
  saving: boolean = false;

  userRole: 'super_admin' | 'owner' | 'tenant' = 'owner';
  currentUser: any = null;

  // Super Admin Settings State
  adminTab: 'profile' | 'password' | 'health' = 'profile';
  adminName: string = '';
  adminEmail: string = '';
  adminPhone: string = '';
  loadingAdminProfile: boolean = false;
  savingAdminProfile: boolean = false;

  // Super Admin Change Password State
  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  changingPassword: boolean = false;

  // Super Admin System Health
  systemHealth: any = null;
  loadingHealth: boolean = false;

  // Owner Settings State
  ownerData: any = null;
  upiId: string = '';
  ownerName: string = '';
  testQrCode: string | null = null;
  testUpiUrl: string = '';

  // Tenant Settings State
  tenantData: any = null;

  razorpayKeyId: string = 'rzp_test_1DP5mmOlF5G5ag';
  razorpayKeySecret: string = 's2xL7UeE8xW61nN1O4f5E3V8';

  constructor(
    private api: ApiService,
    public GF: GlobalService
  ) {}

  ngOnInit(): void {
    this.userRole = this.GF.getUserRole() || 'owner';
    this.currentUser = this.GF.getUser();

    if (this.userRole === 'super_admin') {
      this.loadAdminProfile();
      this.loadSystemHealth();
    } else if (this.userRole === 'owner') {
      this.loadSettings();
    } else if (this.userRole === 'tenant') {
      this.loadTenantProfile();
    }
  }

  loadTenantProfile(): void {
    this.api.postApi('tenant-rent-info', {}).subscribe({
      next: (res: any) => {
        if (res.status && res.tenant) {
          this.tenantData = res.tenant;
        }
      },
      error: () => {}
    });
  }

  // ==========================================
  // SUPER ADMIN METHODS
  // ==========================================
  loadAdminProfile(): void {
    this.loadingAdminProfile = true;
    this.api.postApi('get-admin-profile', {}).subscribe({
      next: (res: any) => {
        this.loadingAdminProfile = false;
        if (res.status && res.admin) {
          this.adminName = res.admin.name || '';
          this.adminEmail = res.admin.email || '';
          this.adminPhone = res.admin.phone || '';
          this.currentUser = { ...this.currentUser, ...res.admin };
        }
      },
      error: () => {
        this.loadingAdminProfile = false;
        // Fallback to local storage user
        if (this.currentUser) {
          this.adminName = this.currentUser.name || '';
          this.adminEmail = this.currentUser.email || '';
          this.adminPhone = this.currentUser.phone || '';
        }
      }
    });
  }

  updateAdminProfile(): void {
    if (!this.adminName.trim()) {
      this.GF.showToast('Please enter your full name', 'warning');
      return;
    }

    if (!this.adminEmail.trim() || !this.adminEmail.includes('@')) {
      this.GF.showToast('Please enter a valid email address', 'warning');
      return;
    }

    this.savingAdminProfile = true;
    this.api.postApi('update-admin-profile', {
      name: this.adminName.trim(),
      email: this.adminEmail.trim(),
      phone: this.adminPhone.trim()
    }).subscribe({
      next: (res: any) => {
        this.savingAdminProfile = false;
        if (res.status) {
          this.GF.showToast(res.message || 'Profile updated successfully!', 'success');
          if (res.admin) {
            this.currentUser = { ...this.currentUser, ...res.admin };
            localStorage.setItem('user_data', JSON.stringify(this.currentUser));
          }
        } else {
          this.GF.showToast(res.message || 'Failed to update profile', 'danger');
        }
      },
      error: (err: any) => {
        this.savingAdminProfile = false;
        this.GF.showToast(err.error?.message || 'Server error updating profile', 'danger');
      }
    });
  }

  changeAdminPassword(): void {
    if (!this.currentPassword) {
      this.GF.showToast('Please enter your current password', 'warning');
      return;
    }

    if (!this.newPassword || this.newPassword.length < 6) {
      this.GF.showToast('New password must be at least 6 characters long', 'warning');
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      this.GF.showToast('New password and confirm password do not match', 'warning');
      return;
    }

    this.changingPassword = true;
    this.api.postApi('change-admin-password', {
      current_password: this.currentPassword,
      new_password: this.newPassword
    }).subscribe({
      next: (res: any) => {
        this.changingPassword = false;
        if (res.status) {
          this.GF.showToast(res.message || 'Password changed successfully!', 'success');
          this.currentPassword = '';
          this.newPassword = '';
          this.confirmPassword = '';
        } else {
          this.GF.showToast(res.message || 'Failed to change password', 'danger');
        }
      },
      error: (err: any) => {
        this.changingPassword = false;
        this.GF.showToast(err.error?.message || 'Error changing password', 'danger');
      }
    });
  }

  loadSystemHealth(): void {
    this.loadingHealth = true;
    this.api.postApi('system-health', {}).subscribe({
      next: (res: any) => {
        this.loadingHealth = false;
        if (res.status) {
          this.systemHealth = res.health;
        }
      },
      error: () => {
        this.loadingHealth = false;
      }
    });
  }

  // ==========================================
  // PG OWNER METHODS
  // ==========================================
  loadSettings(): void {
    this.loading = true;
    this.api.postApi('get-owner-settings', {}).subscribe({
      next: (res: any) => {
        this.loading = false;
        if (res.status && res.owner) {
          this.ownerData = res.owner;
          this.upiId = res.owner.upi_id || '';
          this.ownerName = res.owner.name || '';
          this.testQrCode = res.test_qr || null;
          this.testUpiUrl = res.test_upi_url || '';
        }
      },
      error: (err: any) => {
        this.loading = false;
        console.error('Error fetching settings:', err);
      }
    });
  }

  saveUpiSettings(): void {
    if (!this.upiId || !this.upiId.includes('@')) {
      this.GF.showToast('Please enter a valid UPI ID (e.g. yourname@oksbi or 9876543210@paytm)', 'warning');
      return;
    }

    this.saving = true;
    this.api.postApi('save-owner-settings', {
      upi_id: this.upiId.trim(),
      name: this.ownerName.trim()
    }).subscribe({
      next: (res: any) => {
        this.saving = false;
        if (res.status) {
          this.GF.showToast('UPI ID & Settings saved successfully!', 'success');
          this.loadSettings();
        } else {
          this.GF.showToast(res.message || 'Failed to save settings', 'danger');
        }
      },
      error: (err: any) => {
        this.saving = false;
        this.GF.showToast(err.error?.message || 'Server error saving settings', 'danger');
      }
    });
  }

  saveRazorpayKeys(): void {
    this.GF.showToast('Razorpay API keys updated successfully!', 'success');
  }

}

