import { CommonModule, DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { GlobalService } from '../../services/global.service';
import { FormValidationMessageComponent } from '../../components/form-validation-message/form-validation-message.component';
import { environment } from '../../../environments/environment.development';

const server_url = environment.apiUrl;

@Component({
  selector: 'app-complaints',
  imports: [CommonModule, PaginationComponent, ReactiveFormsModule, FormValidationMessageComponent, DatePipe],
  templateUrl: './complaints.component.html',
  styleUrl: './complaints.component.css'
})
export class ComplaintsComponent implements OnInit {

  server_url = server_url;
  filterOption: boolean = false;
  editMode: boolean = false;
  table_data: any[] = [];
  total_records: number = 0;
  page: number = 1;
  limit: number = 10;
  total_pages: number = 0;
  editId: string = '';
  pending_complaints: any[] = [];
  in_progress_complaints: any[] = [];
  resolved_complaints: any[] = [];
  imgSrc: string = '';
  userRole: 'tenant' | 'owner' = 'tenant';

  @ViewChild('modelClose') modelClose!: ElementRef;

  constructor(private api: ApiService, public GF: GlobalService) { }

  ngOnInit(): void {
    this.userRole = (this.GF.getUserRole() as any) || 'tenant';
    this.getTable();
  }

  filterForm = new FormGroup({
    description: new FormControl(''),
    action: new FormControl('tenant_complaint'),
    status: new FormControl(''),
    limit: new FormControl(10),
    order: new FormControl("DESC"),
    sort_by: new FormControl('id'),
    page: new FormControl(1),
  });

  myForm = new FormGroup({
    description: new FormControl('', [Validators.required, Validators.maxLength(300), Validators.minLength(3)]),
    category: new FormControl('Food', [Validators.required, Validators.pattern(/^(Food|Water|Wi-Fi|Electricity|Other)$/)]),
    status: new FormControl('pending', [Validators.pattern(/^(pending|in-progress|resolved)$/)]),
    image: new FormControl('')
  });

  resetFilterForm() {
    this.filterForm.get('page')?.setValue(1);
    this.GF.preserveField(this.filterForm, ['action', 'limit', 'sort'], null);
    this.filterForm.patchValue({
      status: '',
      limit: 10,
      order: 'DESC',
      sort_by: 'id',
      page: 1,
      description: ''
    });
    this.getTable();
  }

  getTable() {
    this.api.postApi('tenant-complaint-table', this.filterForm.value).subscribe({
      next: (res: any) => {
        if (res && res.status) {
          this.limit = Number(res.limit) || 10;
          this.total_pages = Number(res.total_pages) || 1;
          this.page = Number(res.page) || 1;
          this.total_records = Number(res.total_records) || 0;
          this.table_data = Array.isArray(res.data) ? res.data : [];
          this.filterComplaints();
        } else {
          this.table_data = [];
          this.filterComplaints();
          if (res?.message) {
            this.GF.showToast(res.message, 'danger');
          }
        }
      },
      error: (err: any) => {
        this.table_data = [];
        this.filterComplaints();
        this.GF.showToast(err?.error?.message || 'Failed to load complaints', 'danger');
      }
    });
  }

  OpenAddForm() {
    this.myForm.reset({
      category: 'Food',
      status: 'pending',
      description: '',
      image: ''
    });
    this.myForm.markAsUntouched();
    this.Attachment = '';
    this.editMode = false;
  }

  add() {
    this.myForm.markAllAsTouched();

    if (this.myForm.valid) {
      const formData = {
        ...this.myForm.value,
        status: this.myForm.value.status || 'pending',
        image: this.Attachment || ''
      };

      this.api.postApi('add-complaint', formData).subscribe({
        next: (res: any) => {
          if (res.status) {
            this.GF.showToast(res.message || 'Complaint submitted successfully', 'success');
            this.closeForm();
            this.getTable();
          } else {
            this.GF.showToast(res.message || 'Failed to submit complaint', 'danger');
          }
        },
        error: (err: any) => {
          this.GF.showToast(err?.error?.message || 'Error submitting complaint', 'danger');
        }
      });
    }
  }

  closeForm() {
    if (this.modelClose?.nativeElement) {
      this.modelClose.nativeElement.click();
    }
    this.myForm.reset({
      category: 'Food',
      status: 'pending',
      description: '',
      image: ''
    });
    this.Attachment = '';
    this.getTable();
  }

  UPDATE() {
    this.myForm.markAllAsTouched();
    if (this.myForm.valid) {
      const formData = {
        ...this.myForm.value,
        image: this.Attachment,
        id: this.editId
      };
      this.api.postApi('update-complaint', formData).subscribe({
        next: (res: any) => {
          if (res.status) {
            this.GF.showToast(res.message || 'Complaint updated successfully', 'success');
            this.closeForm();
          } else {
            this.GF.showToast(res.message || 'Failed to update complaint', 'danger');
          }
        },
        error: (err: any) => {
          this.GF.showToast(err?.error?.message || 'Error updating complaint', 'danger');
        }
      });
    }
  }

  EDIT(clientId: string) {
    this.myForm.markAsUntouched();
    this.editMode = true;
    this.Attachment = '';
    this.api.postApi('get-list', { action: 'tenant_complaint', id: clientId }).subscribe({
      next: (res: any) => {
        if (res.status && res.data) {
          this.editId = res.data.id;
          delete res.data['image'];
          delete res.data['password'];
          delete res.data['id'];
          res.data.status = res.data.status || 'pending';
          this.myForm.patchValue(res.data);
        } else {
          this.GF.showToast(res.message || 'Failed to load details', 'danger');
        }
      },
      error: (err: any) => {
        this.GF.showToast(err?.error?.message || 'Error loading details', 'danger');
      }
    });
  }

  async deleteComplaint(id: any) {
    const confirmed = await this.GF.confirm({
      title: 'Delete Complaint',
      message: 'Are you sure you want to permanently delete this complaint ticket?',
      confirmText: 'Delete Ticket',
      cancelText: 'Cancel',
      type: 'danger'
    });

    if (confirmed) {
      this.api.postApi('delete', { action: 'complaints', id: id }).subscribe({
        next: (res: any) => {
          if (res.status) {
            this.GF.showToast(res.message || 'Complaint deleted successfully', 'success');
            this.getTable();
          } else {
            this.GF.showToast(res.message || 'Failed to delete complaint', 'danger');
          }
        },
        error: (err: any) => {
          this.GF.showToast(err?.error?.message || 'Error deleting complaint', 'danger');
        }
      });
    }
  }

  Attachment: any = '';

  fileUpload(event: any, fieldName: string) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        (this as any)[fieldName] = reader.result;
      };
    }
  }

  filterComplaints() {
    this.pending_complaints = [];
    this.resolved_complaints = [];
    this.in_progress_complaints = [];

    (this.table_data || []).forEach((ele: any) => {
      switch (ele.status) {
        case 'pending':
          this.pending_complaints.push(ele);
          break;
        case 'resolved':
          this.resolved_complaints.push(ele);
          break;
        case 'in-progress':
          this.in_progress_complaints.push(ele);
          break;
        default:
          this.pending_complaints.push(ele);
          break;
      }
    });
  }

  openBigImage(imgUrl: any) {
    this.imgSrc = imgUrl;
  }

}
