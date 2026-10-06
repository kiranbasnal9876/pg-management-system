import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private router: Router) { }

  // Common modern toast notification
  showToast(
    message: string,
    type: 'success' | 'danger' | 'info' | 'warning' = 'info'
  ) {
    const toast = document.createElement('div');
    toast.className = `toast align-items-center text-white border-0 show position-fixed bottom-0 end-0 m-3 bg-${type} shadow-lg`;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');
    toast.style.zIndex = '99999';
    toast.style.minHeight = '38px';
    toast.style.borderRadius = '8px';
    toast.style.padding = '0.35rem 0.6rem';

    toast.innerHTML = `
      <div class="d-flex align-items-center" style="width: 100%;">
        <div class="toast-body fs-12 fw-medium">
          ${message}
        </div>
        <button 
          type="button" 
          class="btn-close btn-close-white me-2 m-auto" 
          data-bs-dismiss="toast" 
          aria-label="Close">
        </button>
      </div>
    `;

    document.body.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 3500);
  }

  // Centralized Logout Action
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user_role');
    localStorage.removeItem('user_data');
    this.showToast('Logged out successfully', 'info');
    this.router.navigate(['/log-in']);
  }

  // Get current user payload from token or storage
  getUser(): any {
    try {
      const stored = localStorage.getItem('user_data');
      if (stored) return JSON.parse(stored);

      const token = localStorage.getItem('token');
      if (!token) return null;

      const parts = token.split('.');
      if (parts.length === 3) {
        const payload = JSON.parse(atob(parts[1]));
        return payload;
      }
    } catch (e) {
      console.error('Failed to parse user token:', e);
    }
    return null;
  }

  // Get current user role ('tenant' | 'owner')
  getUserRole(): 'tenant' | 'owner' | null {
    const storedRole = localStorage.getItem('user_role');
    if (storedRole === 'tenant' || storedRole === 'owner') return storedRole;

    const user = this.getUser();
    if (user) {
      if (user.role) return user.role;
      if (user.room_id !== undefined || user.pg_id !== undefined) return 'tenant';
      return 'owner';
    }
    return null;
  }

  isTenant(): boolean {
    return this.getUserRole() === 'tenant';
  }

  isOwner(): boolean {
    return this.getUserRole() === 'owner';
  }

  // Format phone number for WhatsApp (e.g. 9876543210 -> 919876543210)
  cleanPhone(phone: any): string {
    if (!phone) return '';
    let digits = String(phone).replace(/[^0-9]/g, '');
    if (digits.length === 10) {
      digits = '91' + digits;
    }
    return digits;
  }

  // Open WhatsApp in new browser tab
  openWhatsApp(phone: any, message: string) {
    const cleaned = this.cleanPhone(phone);
    if (!cleaned) {
      this.showToast('Invalid phone number for WhatsApp', 'warning');
      return;
    }
    const url = `https://wa.me/${cleaned}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  preserveField(formGroup: FormGroup, dontReset: string[], imageRemoveFunction: Function | null, RemoveCloneFunction?: Function) {
    const preservedValues: { [key: string]: any } = {};
    dontReset.forEach((controlName) => {
      preservedValues[controlName] = formGroup.get(controlName)?.value;
    });
    formGroup.reset(preservedValues);
    if (imageRemoveFunction !== null) {
      imageRemoveFunction();
    }
  }

  // =========================================================================
  // Global Input Validation & Restriction Functions
  // =========================================================================

  /**
   * Restrict input keystrokes to numbers only (0-9)
   * Usage in templates: (keypress)="GF.numberOnly($event)"
   */
  numberOnly(event: KeyboardEvent): boolean {
    const navigationKeys = [
      'Backspace', 'Delete', 'Tab', 'Escape', 'Enter',
      'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
      'Home', 'End'
    ];

    if (
      navigationKeys.includes(event.key) ||
      event.ctrlKey || event.metaKey
    ) {
      return true;
    }

    if (!/^[0-9]$/.test(event.key)) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  /**
   * Restrict input keystrokes to decimal numbers (e.g. 1000 or 1000.50)
   * Usage in templates: (keypress)="GF.decimalOnly($event, myInput.value)"
   */
  decimalOnly(event: KeyboardEvent, currentValue: string = ''): boolean {
    const navigationKeys = [
      'Backspace', 'Delete', 'Tab', 'Escape', 'Enter',
      'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
      'Home', 'End'
    ];

    if (
      navigationKeys.includes(event.key) ||
      event.ctrlKey || event.metaKey
    ) {
      return true;
    }

    if (event.key === '.') {
      if (currentValue && currentValue.includes('.')) {
        event.preventDefault();
        return false;
      }
      return true;
    }

    if (!/^[0-9]$/.test(event.key)) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  /**
   * Restrict input keystrokes to alphabets and spaces only
   * Usage in templates: (keypress)="GF.alphabetOnly($event)"
   */
  alphabetOnly(event: KeyboardEvent): boolean {
    const navigationKeys = [
      'Backspace', 'Delete', 'Tab', 'Escape', 'Enter',
      'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
      'Home', 'End'
    ];

    if (
      navigationKeys.includes(event.key) ||
      event.ctrlKey || event.metaKey
    ) {
      return true;
    }

    if (!/^[a-zA-Z\s]$/.test(event.key)) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  /**
   * Restrict input keystrokes to alphanumeric characters (letters, numbers, space, underscore, hyphen)
   * Usage in templates: (keypress)="GF.alphaNumericOnly($event)"
   */
  alphaNumericOnly(event: KeyboardEvent): boolean {
    const navigationKeys = [
      'Backspace', 'Delete', 'Tab', 'Escape', 'Enter',
      'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
      'Home', 'End'
    ];

    if (
      navigationKeys.includes(event.key) ||
      event.ctrlKey || event.metaKey
    ) {
      return true;
    }

    if (!/^[a-zA-Z0-9\s_-]$/.test(event.key)) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  /**
   * Enforce max length on any input or textarea (handles typing, pasting, and type="number")
   * Usage in templates: (input)="GF.enforceMaxLength($event, 10)"
   */
  enforceMaxLength(event: Event, maxLength: number): void {
    const input = event.target as HTMLInputElement | HTMLTextAreaElement;
    if (input && input.value && input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);
    }
  }

  /**
   * Sanitize clipboard paste on numeric fields to numbers only and clamp to maxLength
   * Usage in templates: (paste)="GF.handleNumberPaste($event, 10)"
   */
  handleNumberPaste(event: ClipboardEvent, maxLength?: number): void {
    event.preventDefault();
    const clipboardData = event.clipboardData || (window as any).clipboardData;
    const pastedText = clipboardData?.getData('text') || '';
    let digitsOnly = pastedText.replace(/[^0-9]/g, '');

    const input = event.target as HTMLInputElement;
    if (input) {
      const maxLen = maxLength ?? (input.maxLength > 0 ? input.maxLength : undefined);
      const start = input.selectionStart || 0;
      const end = input.selectionEnd || 0;
      const original = input.value || '';
      let newValue = original.slice(0, start) + digitsOnly + original.slice(end);

      if (maxLen && maxLen > 0) {
        newValue = newValue.slice(0, maxLen);
      }

      input.value = newValue;
      input.dispatchEvent(new Event('input', { bubbles: true }));
    }
  }

  /**
   * Sanitize clipboard paste on alphabet fields and clamp to maxLength
   * Usage in templates: (paste)="GF.handleAlphabetPaste($event, 30)"
   */
  handleAlphabetPaste(event: ClipboardEvent, maxLength?: number): void {
    event.preventDefault();
    const clipboardData = event.clipboardData || (window as any).clipboardData;
    const pastedText = clipboardData?.getData('text') || '';
    const lettersOnly = pastedText.replace(/[^a-zA-Z\s]/g, '');

    const input = event.target as HTMLInputElement;
    if (input) {
      const maxLen = maxLength ?? (input.maxLength > 0 ? input.maxLength : undefined);
      const start = input.selectionStart || 0;
      const end = input.selectionEnd || 0;
      const original = input.value || '';
      let newValue = original.slice(0, start) + lettersOnly + original.slice(end);

      if (maxLen && maxLen > 0) {
        newValue = newValue.slice(0, maxLen);
      }

      input.value = newValue;
      input.dispatchEvent(new Event('input', { bubbles: true }));
    }
  }
}

// Standalone exported global functions for direct imports
export const globalNumberOnly = (event: KeyboardEvent) => {
  const navigationKeys = [
    'Backspace', 'Delete', 'Tab', 'Escape', 'Enter',
    'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
    'Home', 'End'
  ];
  if (navigationKeys.includes(event.key) || event.ctrlKey || event.metaKey) return true;
  if (!/^[0-9]$/.test(event.key)) {
    event.preventDefault();
    return false;
  }
  return true;
};

export const globalAlphabetOnly = (event: KeyboardEvent) => {
  const navigationKeys = [
    'Backspace', 'Delete', 'Tab', 'Escape', 'Enter',
    'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
    'Home', 'End'
  ];
  if (navigationKeys.includes(event.key) || event.ctrlKey || event.metaKey) return true;
  if (!/^[a-zA-Z\s]$/.test(event.key)) {
    event.preventDefault();
    return false;
  }
  return true;
};

export const globalEnforceMaxLength = (event: Event, maxLength: number) => {
  const input = event.target as HTMLInputElement | HTMLTextAreaElement;
  if (input && input.value && input.value.length > maxLength) {
    input.value = input.value.slice(0, maxLength);
  }
};

