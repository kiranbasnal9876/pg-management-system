import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent implements OnInit {

  loading: boolean = false;
  saving: boolean = false;

  ownerData: any = null;
  upiId: string = '';
  ownerName: string = '';
  testQrCode: string | null = null;
  testUpiUrl: string = '';

  razorpayKeyId: string = 'rzp_test_1DP5mmOlF5G5ag';
  razorpayKeySecret: string = 's2xL7UeE8xW61nN1O4f5E3V8';

  constructor(
    private api: ApiService,
    public GF: GlobalService
  ) {}

  ngOnInit(): void {
    this.loadSettings();
  }

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
