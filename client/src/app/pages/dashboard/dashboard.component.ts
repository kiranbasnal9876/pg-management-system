import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GlobalService } from '../../services/global.service';
import { ApiService } from '../../services/api.service';
import { ChartComponent } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexChart,
  ApexResponsive,
  ApexAxisChartSeries,
  ApexDataLabels,
  ApexPlotOptions,
  ApexXAxis,
  ApexLegend,
  ApexFill
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: any;
  responsive: ApexResponsive[];
};

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, ChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  userRole: 'tenant' | 'owner' = 'owner';
  currentUser: any = null;

  // Owner dashboard metrics
  property_id: number[] = [];
  total_tenant = 0;
  total_complaints = 0;
  total_pending_rent = 0; // count of tenants pending
  total_paid_rent = 0;    // count of tenants paid
  pending_amount = 0;     // ₹ amount pending
  paid_amount = 0;        // ₹ amount collected
  total_pending_complaints = 0;
  total_rooms = 0;
  total_rooms_available = 0;
  room_pi_data = [{ id: 0, pg_name: '', total_rooms: 0, filled_rooms: 0 }];

  // Owner rent collection breakdown
  allTenantsList: any[] = [];
  paidTenantsList: any[] = [];
  pendingTenantsList: any[] = [];
  rentFilterTab: 'all' | 'pending' | 'paid' = 'all';
  loadingRentSummary: boolean = false;

  // Tenant dashboard data
  tenantRentData: any = null;
  tenantTransactions: any[] = [];
  loadingTenantData: boolean = false;

  constructor(private api: ApiService, public GF: GlobalService) {}

  chartOptions: any = {
    series: [10, 10],
    chart: {
      type: 'donut',
      width: 280,
    },
    colors: ['#10b981', '#f43f5e'],
    labels: ['Paid Rent', 'Pending Rent'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 260,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  ngOnInit(): void {
    this.currentUser = this.GF.getUser();
    this.userRole = this.GF.getUserRole() || 'owner';

    if (this.userRole === 'tenant') {
      this.loadTenantDashboard();
    } else {
      this.getProperty();
      this.loadOwnerRentSummary();
    }
  }

  // --- TENANT DASHBOARD METHODS ---
  loadTenantDashboard(): void {
    this.loadingTenantData = true;
    this.api.postApi('tenant-rent-info', {}).subscribe({
      next: (res: any) => {
        this.loadingTenantData = false;
        if (res.status) {
          this.tenantRentData = res.tenant;
          this.tenantTransactions = res.transactions || [];
        }
      },
      error: () => {
        this.loadingTenantData = false;
      }
    });
  }

  chatWithLandlord(): void {
    const phone = this.tenantRentData?.owner_phone;
    if (!phone) {
      this.GF.showToast('Landlord phone number is not available', 'warning');
      return;
    }
    const message = `Hi! I am ${this.tenantRentData?.name} from Room ${this.tenantRentData?.room_number} (${this.tenantRentData?.pg_name}). I had a query regarding my PG stay.`;
    this.GF.openWhatsApp(phone, message);
  }

  // --- OWNER DASHBOARD METHODS ---
  getProperty(): void {
    this.api.postApi('property-data', {}).subscribe({
      next: (res: any) => {
        if (res.status && Array.isArray(res.data)) {
          this.property_id = res.data.map((ele: any) => ele.id);
          this.getPgDetails();
        }
      },
      error: (err: any) => {
        this.GF.showToast(err.error?.message || 'Error fetching properties', 'danger');
      }
    });
  }

  getPgDetails(): void {
    this.api.postApi('client-dashboard-data', { properties: this.property_id }).subscribe({
      next: (res: any) => {
        if (res.status) {
          this.total_tenant = res.total_tenant || 0;
          this.total_complaints = res.total_complaints || 0;
          this.total_pending_rent = res.total_pending_rent || 0;
          this.total_paid_rent = res.total_paid_rent || 0;
          this.pending_amount = res.pending_amount || 0;
          this.paid_amount = res.paid_amount || 0;
          this.total_pending_complaints = res.total_pending_complaints || 0;
          this.total_rooms = res.total_rooms || 0;
          this.total_rooms_available = res.total_rooms_available || 0;
          this.room_pi_data = res.room_pi_data || [];

          // Update chart series
          this.chartOptions = {
            ...this.chartOptions,
            series: [this.total_paid_rent, this.total_pending_rent]
          };
        }
      },
      error: (err: any) => {
        this.GF.showToast(err.error?.message || 'Error fetching dashboard metrics', 'danger');
      }
    });
  }

  loadOwnerRentSummary(): void {
    this.loadingRentSummary = true;
    this.api.postApi('owner-rent-summary', {}).subscribe({
      next: (res: any) => {
        this.loadingRentSummary = false;
        if (res.status) {
          this.paidTenantsList = res.paid_tenants || [];
          this.pendingTenantsList = res.pending_tenants || [];
          this.allTenantsList = [...this.pendingTenantsList, ...this.paidTenantsList];
        }
      },
      error: () => {
        this.loadingRentSummary = false;
      }
    });
  }

  get filteredTenants(): any[] {
    if (this.rentFilterTab === 'paid') return this.paidTenantsList;
    if (this.rentFilterTab === 'pending') return this.pendingTenantsList;
    return this.allTenantsList;
  }

  // Send WhatsApp Reminder to Tenant
  sendWhatsAppReminder(tenant: any): void {
    if (tenant.whatsapp_link) {
      window.open(tenant.whatsapp_link, '_blank');
      return;
    }

    const rentAmt = Number(tenant.monthly_rent || 8000).toLocaleString('en-IN');
    const message = 
      `Hi ${tenant.name}! 👋\n\n` +
      `This is a friendly reminder from *${tenant.pg_name || 'PG Management'}*.\n` +
      `Your monthly room rent of *₹${rentAmt}* for *Room ${tenant.room_number || '-'}* is currently *PENDING*.\n\n` +
      `Please log in to your tenant portal to pay securely online via Razorpay/UPI.\n` +
      `Thank you! 🏠`;

    this.GF.openWhatsApp(tenant.phone, message);
  }

  // Send WhatsApp Receipt Confirmation to Tenant
  sendWhatsAppReceipt(tenant: any): void {
    const rentAmt = Number(tenant.monthly_rent || 8000).toLocaleString('en-IN');
    const message = 
      `*🏠 PG Rent Payment Receipt*\n\n` +
      `Tenant Name: ${tenant.name}\n` +
      `PG: ${tenant.pg_name || 'PG Residency'}\n` +
      `Room: ${tenant.room_number || '-'}\n` +
      `Amount Paid: ₹${rentAmt}\n` +
      `Status: PAID (Confirmed) ✅\n` +
      `Date: ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}\n\n` +
      `Thank you for paying on time! 😊`;

    this.GF.openWhatsApp(tenant.phone, message);
  }

  // Owner manually marks tenant rent as paid or pending
  toggleTenantRentStatus(tenant: any, newStatus: 'paid' | 'pending'): void {
    this.api.postApi('toggle-rent-status', {
      tenant_id: tenant.id,
      rent_status: newStatus,
      payment_method: 'Cash',
      amount: tenant.monthly_rent
    }).subscribe({
      next: (res: any) => {
        if (res.status) {
          this.GF.showToast(res.message, 'success');
          this.getPgDetails();
          this.loadOwnerRentSummary();
        } else {
          this.GF.showToast(res.message, 'danger');
        }
      },
      error: (err: any) => {
        this.GF.showToast(err.error?.message || 'Error updating rent status', 'danger');
      }
    });
  }

  refreshAll(): void {
    if (this.userRole === 'tenant') {
      this.loadTenantDashboard();
    } else {
      this.getProperty();
      this.loadOwnerRentSummary();
    }
    this.GF.showToast('Dashboard data refreshed', 'info');
  }
}
