import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { GlobalService } from '../../services/global.service';

export interface SubscriptionPlan {
  id: number;
  plan_name: string;
  total_property: number;
  total_rooms: number;
  total_tenant: number;
  price: number;
  billing_cycle: string;
  features: string;
  status: number;
  created_at?: string;
  subscriber_count?: number;
}

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css'
})
export class PlansComponent implements OnInit {

  plans: SubscriptionPlan[] = [];
  loading: boolean = false;
  viewMode: 'cards' | 'table' = 'cards';
  editMode: boolean = false;
  selectedPlanId: number | null = null;

  @ViewChild('planModalClose') planModalClose!: ElementRef;

  planForm = new FormGroup({
    plan_name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    price: new FormControl<number | null>(null, [Validators.required, Validators.min(0)]),
    billing_cycle: new FormControl('monthly', [Validators.required]),
    total_property: new FormControl<number | null>(1, [Validators.required, Validators.min(1)]),
    total_rooms: new FormControl<number | null>(50, [Validators.required, Validators.min(1)]),
    total_tenant: new FormControl<number | null>(100, [Validators.required, Validators.min(1)]),
    features: new FormControl('', [Validators.required]),
    status: new FormControl(1, [Validators.required])
  });

  constructor(
    private api: ApiService,
    public GF: GlobalService
  ) {}

  ngOnInit(): void {
    this.loadPlans();
  }

  get totalSubscribers(): number {
    return this.plans.reduce((sum, p) => sum + (Number(p.subscriber_count) || 0), 0);
  }

  get totalEstimatedMrr(): number {
    return this.plans.reduce((sum, p) => sum + ((Number(p.price) || 0) * (Number(p.subscriber_count) || 0)), 0);
  }

  get activePlansCount(): number {
    return this.plans.filter(p => Number(p.status) === 1).length;
  }

  loadPlans(): void {
    this.loading = true;
    this.api.postApi('plan-table', {}).subscribe({
      next: (res: any) => {
        this.loading = false;
        if (res.status) {
          this.plans = res.data || [];
        } else {
          this.GF.showToast(res.message || 'Failed to load plans', 'danger');
        }
      },
      error: (err: any) => {
        this.loading = false;
        this.GF.showToast(err.error?.message || 'Error fetching subscription plans', 'danger');
      }
    });
  }

  openCreateModal(): void {
    this.editMode = false;
    this.selectedPlanId = null;
    this.planForm.reset({
      plan_name: '',
      price: null,
      billing_cycle: 'monthly',
      total_property: 1,
      total_rooms: 50,
      total_tenant: 100,
      features: 'Single Property, Max 50 Rooms, Rent Tracking, Complaint Management',
      status: 1
    });
  }

  openEditModal(plan: SubscriptionPlan): void {
    this.editMode = true;
    this.selectedPlanId = plan.id;
    this.planForm.patchValue({
      plan_name: plan.plan_name,
      price: Number(plan.price),
      billing_cycle: plan.billing_cycle || 'monthly',
      total_property: Number(plan.total_property),
      total_rooms: Number(plan.total_rooms),
      total_tenant: Number(plan.total_tenant),
      features: plan.features || '',
      status: Number(plan.status)
    });
  }

  savePlan(): void {
    this.planForm.markAllAsTouched();
    if (this.planForm.invalid) return;

    const payload = {
      ...this.planForm.value,
      id: this.selectedPlanId
    };

    const endpoint = this.editMode ? 'update-plan' : 'add-plan';

    this.api.postApi(endpoint, payload).subscribe({
      next: (res: any) => {
        if (res.status) {
          this.GF.showToast(res.message, 'success');
          this.planModalClose?.nativeElement?.click();
          this.loadPlans();
        } else {
          this.GF.showToast(res.message, 'danger');
        }
      },
      error: (err: any) => {
        this.GF.showToast(err.error?.message || 'Failed to save plan', 'danger');
      }
    });
  }

  async deletePlan(plan: SubscriptionPlan): Promise<void> {
    if ((Number(plan.subscriber_count) || 0) > 0) {
      this.GF.showToast(`Cannot delete "${plan.plan_name}". ${plan.subscriber_count} client(s) currently subscribed.`, 'warning');
      return;
    }

    const confirmed = await this.GF.confirm({
      title: 'Delete Subscription Plan?',
      message: `Are you sure you want to delete "${plan.plan_name}"? This action cannot be undone.`,
      confirmText: 'Delete Plan',
      type: 'danger'
    });

    if (confirmed) {
      this.api.postApi('delete-plan', { id: plan.id }).subscribe({
        next: (res: any) => {
          if (res.status) {
            this.GF.showToast(res.message, 'success');
            this.loadPlans();
          } else {
            this.GF.showToast(res.message, 'danger');
          }
        },
        error: (err: any) => {
          this.GF.showToast(err.error?.message || 'Failed to delete plan', 'danger');
        }
      });
    }
  }

  getFeatureList(features: string): string[] {
    if (!features) return [];
    return features.split(',').map(f => f.trim()).filter(f => f.length > 0);
  }

  getPlanGradient(index: number): string {
    const gradients = [
      'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(37, 99, 235, 0.05) 100%)',
      'linear-gradient(135deg, rgba(147, 51, 234, 0.15) 0%, rgba(126, 34, 206, 0.05) 100%)',
      'linear-gradient(135deg, rgba(234, 88, 12, 0.15) 0%, rgba(194, 65, 12, 0.05) 100%)',
      'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(5, 150, 105, 0.05) 100%)'
    ];
    return gradients[index % gradients.length];
  }

  getPlanBorderColor(index: number): string {
    const borders = ['#3b82f6', '#9333ea', '#ea580c', '#10b981'];
    return borders[index % borders.length];
  }
}
