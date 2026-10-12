import { CommonModule, DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms'
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { ApiService } from '../../services/api.service';
import { GlobalService } from '../../services/global.service';
import { FormValidationMessageComponent } from '../../components/form-validation-message/form-validation-message.component';
import { StateNamePipe } from '../../pipes/state-name.pipe';
import {environment} from '../../../environments/environment.development'

const server_url = environment.apiUrl

interface state {
  state_id: string,
  state_name: string
}
interface district {
  district_id: string,
  district_name: string
}

@Component({
  selector: 'app-tenant',
  imports: [ReactiveFormsModule, CommonModule, PaginationComponent, FormValidationMessageComponent, StateNamePipe, DatePipe],
  templateUrl: './tenant.component.html',
  styleUrl: './tenant.component.css'
})
export class TenantComponent {

  server_url = server_url
  filterOption: boolean = false
  table_data: any
  total_records: number = 0
  page: number = 0
  limit: number = 0
  total_pages: number = 0
  state_district_data: any
  state_data: state[] | any
  district_data: district[] | any
  districtViewData: district[] | any
  editMode: boolean = false
  EDITId: string = ''
  property_data: any
  roomList: any
  imgSrc: any
  selectedTenantIds: Set<any> = new Set()
  selectAll: boolean = false
  @ViewChild('modelClose') modelClose!: ElementRef;
  @ViewChild('qrModalClose') qrModalClose!: ElementRef;

  selectedQrTenant: any = null;
  loadingQr: boolean = false;
  qrData: any = null;

  constructor(private api: ApiService, public GF: GlobalService) { }

  ngOnInit(): void {
    this.getTable()
    this.getState()
    this.getPropertyData()
  }



  filterForm = new FormGroup({
    pg_id: new FormControl(''),
    action: new FormControl('tenants'),
    district: new FormControl(''),
    state: new FormControl(''),
    status: new FormControl(''),
    limit: new FormControl(10),
    order: new FormControl("DESC"),
    sort_by: new FormControl('id'),
    page: new FormControl(1),
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    dob: new FormControl(''),
    room_number: new FormControl(''),
    occupation: new FormControl(''),
    phone: new FormControl(''),
    emergency_contact: new FormControl(''),
    parent_contact: new FormControl(''),
  })


  resetFilterForm() {
    this.filterForm.get('page')?.setValue(1)
    this.GF.preserveField(this.filterForm, ['action', 'limit', 'sort'], null)
    this.filterForm.patchValue({
      status: '',
      state: '',
      limit: 10,
      order: 'DESC',
      sort_by: 'id',
      page: 1,
      pg_id: '',
      district: '',
      name: '',
      email: '',
      address: '',
      dob: '',
      room_number: '',
      occupation: '',
      phone: '',
      emergency_contact: '',
      parent_contact: '',
    })
    this.getTable()
  }


  dataForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    room_id: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/)]),
    phone: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^[0-9]+$/)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(50), Validators.minLength(3)]),
    parent_contact: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^[0-9]+$/)]),
    emergency_contact: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^[0-9]+$/)]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&]).+$'), Validators.minLength(8), Validators.maxLength(15)]),
    gender: new FormControl('', [Validators.required, Validators.pattern(/^(male|female|other)$/)]),
    dob: new FormControl('', [Validators.required]),
    occupation: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(70)]),
    check_in_date: new FormControl('', [Validators.required]),
    rent_status: new FormControl('', [Validators.required, Validators.pattern(/^(pending|paid)$/)]),
    address: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    state: new FormControl('', [Validators.required]),
    district: new FormControl('', [Validators.required]),
    status: new FormControl('', Validators.required),
    pincode: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
    id: new FormControl(''),
    pg_id: new FormControl('', [Validators.required]),
    profile_photo: new FormControl('', [Validators.required]),
    aadhar: new FormControl('' , [Validators.required]),
    pan: new FormControl('', [Validators.required])
  })

  filterSearch() {
    this.filterForm.get('page')?.setValue(1)
  }

  getTable() {
    this.api.postApi('tenant-table', this.filterForm.value).subscribe(
      (res: any) => {
        if (res.status) {
          this.limit = res.limit;
          this.total_pages = res.total_pages;
          this.page = res.page;
          this.total_records = res.total_records;
          this.table_data = res.data;
          this.selectedTenantIds.clear();
          this.selectAll = false;
        } else {
          this.GF.showToast(res.message, 'danger');
        }
      },
      (err: any) => {
        this.GF.showToast(err.error?.message || 'Failed to fetch tenants', 'danger');
      }
    );
  }

  getAvailableRooms(pg_id: string, current_room_id?: string) {
    if (!pg_id) {
      this.roomList = [];
      return;
    }
    this.api.postApi('room-list', { pg_id: pg_id, current_room_id: current_room_id }).subscribe(
      (res: any) => {
        if (Array.isArray(res)) {
          this.roomList = res;
        } else if (res?.data && Array.isArray(res.data)) {
          this.roomList = res.data;
        } else {
          this.roomList = [];
        }
      },
      (err: any) => {
        this.roomList = [];
        this.GF.showToast(err.error?.message || 'Failed to load rooms', 'danger');
      }
    );
  }


  // table shorting 
  sortColumn: string = '';
  sortOrder: 'ASC' | 'DESC' = 'DESC';

  sortingTable(sortOn: string) {
    if (this.sortColumn === sortOn) {
      this.sortOrder = this.sortOrder === 'ASC' ? 'DESC' : 'ASC';
    } else {
      this.sortColumn = sortOn;
      this.sortOrder = 'ASC';
    }
    this.filterForm.controls['order'].setValue(this.sortOrder);
    this.filterForm.controls['sort_by'].setValue(sortOn);
    this.getTable();
  }


  file: any;

  // In your component class
  aadharFile: any;
  profileFile: any;
  panCardFile: any; // Add more as needed

  fileUpload(event: any, fieldName: string) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Convert file to base64
      reader.onload = () => {
        (this as any)[fieldName] = reader.result; // Dynamically assign to correct variable
      };
    }
  }

  ADD() {
    // Make password required with standard constraints
    const passwordControl = this.dataForm.get('password');
    passwordControl?.setValidators([
      Validators.required,
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&]).+$'),
      Validators.minLength(8),
      Validators.maxLength(15)
    ]);
    passwordControl?.updateValueAndValidity();

    this.dataForm.get('profile_photo')?.setValidators([Validators.required]);
    this.dataForm.get('profile_photo')?.updateValueAndValidity();
    this.dataForm.get('aadhar')?.setValidators([Validators.required]);
    this.dataForm.get('aadhar')?.updateValueAndValidity();
    this.dataForm.get('pan')?.setValidators([Validators.required]);
    this.dataForm.get('pan')?.updateValueAndValidity();

    this.dataForm.markAllAsTouched();

    if (this.dataForm.invalid) {
      this.GF.showToast('Please fill all required fields correctly', 'danger');
      return;
    }

    const formData: any = {
      ...this.dataForm.value,
      aadhar: this.aadharFile,
      profile_photo: this.profileFile,
      pan: this.panCardFile
    };
    delete formData.id;

    this.api.postApi('add-tenant', formData).subscribe(
      (res: any) => {
        if (res.status) {
          this.GF.showToast(res.message, 'success');
          this.closedataForm();
        } else {
          this.GF.showToast(res.message, 'danger');
        }
      },
      (err: any) => {
        this.GF.showToast(err.error?.message || 'Failed to register tenant', 'danger');
      }
    );
  }

  getState() {
    this.api.getState().subscribe(
      (res: any) => {
        this.state_district_data = res;
        this.state_data = this.state_district_data.state;
      },
      (err: any) => {
        this.GF.showToast(err.error?.message || 'Failed to fetch states', 'danger');
      }
    );
  }

  getDistrictForView(district_id: string): string {
    if (!this.state_district_data?.district) return district_id || '-';
    const found = this.state_district_data.district.find((ele: any) => ele.district_id == district_id);
    return found ? found.district_name : (district_id || '-');
  }

  getDistrict(state_id: string) {
    this.dataForm.get('district')?.setValue('');
    this.filterForm.get('district')?.setValue('');
    if (!this.state_district_data?.district) {
      this.district_data = [];
      return;
    }
    this.district_data = this.state_district_data.district.filter((ele: any) => ele.state_id == state_id);
  }

  toggleSelectAll(event: any) {
    this.selectAll = event.target.checked;
    if (this.selectAll && Array.isArray(this.table_data)) {
      this.table_data.forEach(item => this.selectedTenantIds.add(item.id));
    } else {
      this.selectedTenantIds.clear();
    }
  }

  toggleSelectTenant(id: any) {
    if (this.selectedTenantIds.has(id)) {
      this.selectedTenantIds.delete(id);
    } else {
      this.selectedTenantIds.add(id);
    }
    this.selectAll = !!(this.table_data && this.table_data.length > 0 && this.selectedTenantIds.size === this.table_data.length);
  }

  isTenantSelected(id: any): boolean {
    return this.selectedTenantIds.has(id);
  }

  async deleteSelected() {
    if (this.selectedTenantIds.size === 0) {
      this.GF.showToast('Please select at least one tenant to delete', 'warning');
      return;
    }
    const count = this.selectedTenantIds.size;
    const confirmed = await this.GF.confirm({
      title: 'Delete Selected Tenants',
      message: `Are you sure you want to permanently delete ${count} selected tenant(s)? Associated complaints and rent records will also be removed.`,
      confirmText: `Yes, Delete (${count})`,
      cancelText: 'Cancel',
      type: 'danger'
    });

    if (!confirmed) return;

    this.api.postApi('delete', { action: 'tenants', ids: Array.from(this.selectedTenantIds) }).subscribe(
      (res: any) => {
        if (res.status) {
          this.GF.showToast(res.message || `${count} tenants deleted successfully`, 'success');
          this.selectedTenantIds.clear();
          this.selectAll = false;
          this.getTable();
        } else {
          this.GF.showToast(res.message, 'danger');
        }
      },
      (err: any) => {
        this.GF.showToast(err.error?.message || 'Failed to delete selected tenants', 'danger');
      }
    );
  }

  async DELETE(clinetId: string) {
    const confirmed = await this.GF.confirm({
      title: 'Delete Tenant',
      message: 'Are you sure you want to delete this tenant? This action will permanently remove all associated tenant records.',
      confirmText: 'Yes, Delete',
      cancelText: 'Cancel',
      type: 'danger'
    });

    if (!confirmed) return;

    this.api.postApi('delete', { action: 'tenants', id: clinetId }).subscribe(
      (res: any) => {
        if (res.status) {
          this.GF.showToast('Tenant deleted successfully', 'success');
          this.getTable();
        } else {
          this.GF.showToast(res.message, 'danger');
        }
      },
      (err: any) => {
        this.GF.showToast(err.error?.message || 'Failed to delete tenant', 'danger');
      }
    );
  }

  EDIT(clientId: string) {
    this.dataForm.markAsUntouched();
    this.editMode = true;
    this.api.postApi('get-list', { action: 'tenants', id: clientId }).subscribe(
      (res: any) => {
        if (res.status) {
          this.EDITId = res.data.id;
          delete res.data['profile_photo'];
          delete res.data['password'];
          delete res.data['aadhar'];
          delete res.data['pan'];
          delete res.data['id'];

          if (res.data['dob']) {
            res.data['dob'] = res.data['dob'].split('T')[0];
          }
          if (res.data['check_in_date']) {
            res.data['check_in_date'] = res.data['check_in_date'].split('T')[0];
          }

          // Clear password & document validators for edit
          this.dataForm.get('password')?.clearValidators();
          this.dataForm.get('password')?.updateValueAndValidity();
          this.dataForm.get('profile_photo')?.clearValidators();
          this.dataForm.get('profile_photo')?.updateValueAndValidity();
          this.dataForm.get('aadhar')?.clearValidators();
          this.dataForm.get('aadhar')?.updateValueAndValidity();
          this.dataForm.get('pan')?.clearValidators();
          this.dataForm.get('pan')?.updateValueAndValidity();

          // Reset uploaded file buffers
          this.aadharFile = null;
          this.profileFile = null;
          this.panCardFile = null;

          // Fetch available rooms for this PG including the tenant's current room
          if (res.data.pg_id) {
            this.getAvailableRooms(res.data.pg_id, res.data.room_id);
          }

          this.dataForm.patchValue(res.data);
          setTimeout(() => {
            if (res.data.state && this.state_district_data?.district) {
              this.district_data = this.state_district_data.district.filter((ele: any) => ele.state_id == res.data.state);
              this.dataForm.get('district')?.setValue(res.data.district);
            }
          }, 200);
        } else {
          this.GF.showToast(res.message, 'danger');
        }
      },
      (err: any) => {
        this.GF.showToast(err.error?.message || 'Failed to load tenant', 'danger');
      }
    );
  }

  UPDATE() {
    // setting password validation conditionally if user typed new password
    const passwordControl = this.dataForm.get('password');
    const enteredPassword = passwordControl?.value;

    if (enteredPassword && enteredPassword.trim() !== '') {
      passwordControl?.setValidators([
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&]).+$'),
        Validators.minLength(8),
        Validators.maxLength(15)
      ]);
    } else {
      passwordControl?.clearValidators();
    }
    passwordControl?.updateValueAndValidity();

    // Document validators are cleared on edit
    this.dataForm.get('profile_photo')?.clearValidators();
    this.dataForm.get('profile_photo')?.updateValueAndValidity();
    this.dataForm.get('aadhar')?.clearValidators();
    this.dataForm.get('aadhar')?.updateValueAndValidity();
    this.dataForm.get('pan')?.clearValidators();
    this.dataForm.get('pan')?.updateValueAndValidity();

    this.dataForm.markAllAsTouched();

    if (this.dataForm.invalid) {
      this.GF.showToast('Please fill all required fields correctly', 'danger');
      return;
    }

    const formData: any = {
      ...this.dataForm.value,
      id: this.EDITId
    };

    if (this.aadharFile) {
      formData.aadhar = this.aadharFile;
    } else {
      delete formData.aadhar;
    }

    if (this.profileFile) {
      formData.profile_photo = this.profileFile;
    } else {
      delete formData.profile_photo;
    }

    if (this.panCardFile) {
      formData.pan = this.panCardFile;
    } else {
      delete formData.pan;
    }

    if (!enteredPassword || enteredPassword.trim() === '') {
      delete formData.password;
    }

    this.api.postApi('update-tenant', formData).subscribe(
      (res: any) => {
        if (res.status) {
          this.GF.showToast(res.message || 'Tenant updated successfully', 'success');
          this.closedataForm();
        } else {
          this.GF.showToast(res.message, 'danger');
        }
      },
      (err: any) => {
        this.GF.showToast(err.error?.message || 'Failed to update tenant', 'danger');
      }
    );
  }

  closedataForm() {
    this.modelClose.nativeElement.click();
    this.dataForm.reset();
    this.aadharFile = null;
    this.profileFile = null;
    this.panCardFile = null;
    this.roomList = [];
    this.district_data = [];
    this.getTable();
  }

  openADDForm() {
    this.dataForm.reset();
    this.dataForm.markAsUntouched();
    this.editMode = false;
    this.district_data = [];
    this.roomList = [];
    this.aadharFile = null;
    this.profileFile = null;
    this.panCardFile = null;

    this.dataForm.patchValue({
      status: 1 as any,
      rent_status: 'pending'
    });

    const passwordControl = this.dataForm.get('password');
    passwordControl?.setValidators([
      Validators.required,
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&]).+$'),
      Validators.minLength(8),
      Validators.maxLength(15)
    ]);
    passwordControl?.updateValueAndValidity();

    this.dataForm.get('profile_photo')?.setValidators([Validators.required]);
    this.dataForm.get('profile_photo')?.updateValueAndValidity();

    this.dataForm.get('aadhar')?.setValidators([Validators.required]);
    this.dataForm.get('aadhar')?.updateValueAndValidity();

    this.dataForm.get('pan')?.setValidators([Validators.required]);
    this.dataForm.get('pan')?.updateValueAndValidity();
  }


  getPropertyData() {

    this.api.postApi('property-data', {}).subscribe(
      (res: any) => {
        if (res.status) {
          this.property_data = res.data
        } else {
          this.GF.showToast(res.message, 'danger')
        }
      },
      (err: any) => {
        this.GF.showToast(err.error.message, 'danger')
      }
    )

  }

  openBigImage(imgUrl:any){
    console.log("Open image")
    this.imgSrc = imgUrl
  }

  sendWhatsAppReminder(tenant: any): void {
    const rentAmt = Number(tenant.monthly_rent || 8000).toLocaleString('en-IN');
    const message = 
      `Hi ${tenant.tenant_name || tenant.name}! 👋\n\n` +
      `This is a friendly reminder from *${tenant.pg_name || 'PG Management'}*.\n` +
      `Your monthly room rent of *₹${rentAmt}* for *Room ${tenant.room_number || '-'}* is currently *PENDING*.\n\n` +
      `Please log in to your tenant portal to pay securely online via Razorpay/UPI.\n` +
      `Thank you! 🏠`;

    this.GF.openWhatsApp(tenant.phone, message);
  }

  sendWhatsAppReceipt(tenant: any): void {
    const rentAmt = Number(tenant.monthly_rent || 8000).toLocaleString('en-IN');
    const message = 
      `*🏠 PG Rent Payment Receipt*\n\n` +
      `Tenant Name: ${tenant.tenant_name || tenant.name}\n` +
      `PG: ${tenant.pg_name || 'PG Residency'}\n` +
      `Room: ${tenant.room_number || '-'}\n` +
      `Amount Paid: ₹${rentAmt}\n` +
      `Status: PAID (Confirmed) ✅\n` +
      `Date: ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}\n\n` +
      `Thank you for paying on time! 😊`;

    this.GF.openWhatsApp(tenant.phone, message);
  }

  openTenantQrModal(tenant: any): void {
    this.selectedQrTenant = tenant;
    this.loadingQr = true;
    this.qrData = null;

    this.api.postApi('generate-tenant-upi-qr', { tenant_id: tenant.id }).subscribe({
      next: (res: any) => {
        this.loadingQr = false;
        if (res.status) {
          this.qrData = res;
        } else {
          this.GF.showToast(res.message || 'Failed to generate QR code', 'danger');
        }
      },
      error: (err: any) => {
        this.loadingQr = false;
        this.GF.showToast(err.error?.message || 'Server error generating QR code', 'danger');
      }
    });
  }

  downloadQrImage(): void {
    if (!this.qrData?.qr_code_image) return;
    const link = document.createElement('a');
    link.href = this.qrData.qr_code_image;
    const tenantName = (this.selectedQrTenant?.tenant_name || this.selectedQrTenant?.name || 'Tenant').replace(/\s+/g, '_');
    const roomNo = this.selectedQrTenant?.room_number || 'Room';
    link.download = `PG_Rent_QR_${tenantName}_Room_${roomNo}.png`;
    link.click();
    this.GF.showToast('QR Code image downloaded!', 'success');
  }

  printQrCard(): void {
    window.print();
  }

  sendWhatsAppQr(tenant: any): void {
    if (!tenant) return;
    const rentAmt = Number(tenant.monthly_rent || 8000).toLocaleString('en-IN');
    const upiLink = this.qrData?.upi_url || '';
    const message = 
      `Hi ${tenant.tenant_name || tenant.name}! 👋\n\n` +
      `Here is your monthly rent payment QR code & UPI payment link for *${tenant.pg_name || 'PG Management'}*.\n\n` +
      `🏠 *Room:* ${tenant.room_number || '-'}\n` +
      `💰 *Amount Due:* ₹${rentAmt}\n` +
      `📱 *Payee UPI ID:* ${this.qrData?.payee?.upi_id || 'PG Owner UPI'}\n\n` +
      `Tap this link to open Google Pay / PhonePe / Paytm and pay directly:\n${upiLink}\n\n` +
      `Thank you! 🏠`;

    this.GF.openWhatsApp(tenant.phone, message);
  }

  markRentPaid(tenant: any): void {
    const name = tenant.tenant_name || tenant.name || 'Tenant';
    if (!confirm(`Confirm mark rent as PAID for ${name}?`)) return;

    this.api.postApi('toggle-rent-status', {
      tenant_id: tenant.id,
      rent_status: 'paid',
      payment_method: 'UPI',
      amount: tenant.monthly_rent || 8000
    }).subscribe({
      next: (res: any) => {
        if (res.status) {
          this.GF.showToast('Rent marked as PAID successfully!', 'success');
          tenant.rent_status = 'paid';
          if (this.selectedQrTenant) this.selectedQrTenant.rent_status = 'paid';
          if (this.qrData?.tenant) this.qrData.tenant.rent_status = 'paid';
          this.getTable();
        } else {
          this.GF.showToast(res.message || 'Failed to update rent status', 'danger');
        }
      },
      error: (err: any) => {
        this.GF.showToast(err.error?.message || 'Error updating rent status', 'danger');
      }
    });
  }

}
