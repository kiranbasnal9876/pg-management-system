import { Directive, ElementRef, HostListener, Input } from '@angular/core';

/**
 * NumbersOnlyDirective
 * Restricts input to numbers only (0-9, optional decimals).
 * Handles keyboard typing, paste events, and mobile/IME input.
 *
 * Usage:
 *   <input type="text" numbersOnly maxlength="10">
 *   <input type="text" numbersOnly [allowDecimal]="true" maxlength="8">
 */
@Directive({
  selector: '[numbersOnly], [appNumbersOnly]',
  standalone: true
})
export class NumbersOnlyDirective {
  @Input() allowDecimal: boolean = false;
  @Input() maxDigits?: number;

  private navigationKeys = [
    'Backspace', 'Delete', 'Tab', 'Escape', 'Enter',
    'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
    'Home', 'End'
  ];

  constructor(private el: ElementRef<HTMLInputElement>) {}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    // Allow navigation and system shortcuts (Ctrl+A, Ctrl+C, Ctrl+V, etc.)
    if (
      this.navigationKeys.includes(event.key) ||
      event.ctrlKey || event.metaKey
    ) {
      return;
    }

    // Allow decimal point if configured and not already present
    if (this.allowDecimal && event.key === '.') {
      const input = this.el.nativeElement;
      if (!input.value.includes('.')) {
        return;
      }
      event.preventDefault();
      return;
    }

    // Reject non-numeric keys
    if (!/^[0-9]$/.test(event.key)) {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent): void {
    event.preventDefault();
    const clipboardData = event.clipboardData || (window as any).clipboardData;
    const pastedText = clipboardData?.getData('text') || '';

    let sanitized = this.allowDecimal
      ? pastedText.replace(/[^0-9.]/g, '')
      : pastedText.replace(/[^0-9]/g, '');

    // Allow only one decimal point if allowDecimal is true
    if (this.allowDecimal && sanitized.includes('.')) {
      const parts = sanitized.split('.');
      sanitized = parts[0] + '.' + parts.slice(1).join('');
    }

    const input = this.el.nativeElement;
    const maxLen = this.maxDigits ?? (input.maxLength > 0 ? input.maxLength : undefined);

    const start = input.selectionStart || 0;
    const end = input.selectionEnd || 0;
    const original = input.value || '';
    let newValue = original.slice(0, start) + sanitized + original.slice(end);

    if (maxLen && maxLen > 0) {
      newValue = newValue.slice(0, maxLen);
    }

    input.value = newValue;
    input.dispatchEvent(new Event('input', { bubbles: true }));
  }

  @HostListener('input', ['$event'])
  onInput(): void {
    const input = this.el.nativeElement;
    let value = input.value;
    const regex = this.allowDecimal ? /[^0-9.]/g : /[^0-9]/g;

    if (regex.test(value)) {
      value = value.replace(regex, '');
      if (this.allowDecimal && value.includes('.')) {
        const parts = value.split('.');
        value = parts[0] + '.' + parts.slice(1).join('');
      }
    }

    const maxLen = this.maxDigits ?? (input.maxLength > 0 ? input.maxLength : undefined);
    if (maxLen && maxLen > 0 && value.length > maxLen) {
      value = value.slice(0, maxLen);
    }

    if (value !== input.value) {
      input.value = value;
      input.dispatchEvent(new Event('input', { bubbles: true }));
    }
  }
}

/**
 * AlphabetsOnlyDirective
 * Restricts input to letters and spaces only.
 *
 * Usage:
 *   <input type="text" alphabetsOnly maxlength="30">
 */
@Directive({
  selector: '[alphabetsOnly], [appAlphabetsOnly]',
  standalone: true
})
export class AlphabetsOnlyDirective {
  private navigationKeys = [
    'Backspace', 'Delete', 'Tab', 'Escape', 'Enter',
    'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
    'Home', 'End'
  ];

  constructor(private el: ElementRef<HTMLInputElement>) {}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (
      this.navigationKeys.includes(event.key) ||
      event.ctrlKey || event.metaKey
    ) {
      return;
    }

    if (!/^[a-zA-Z\s]$/.test(event.key)) {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent): void {
    event.preventDefault();
    const clipboardData = event.clipboardData || (window as any).clipboardData;
    const pastedText = clipboardData?.getData('text') || '';
    const sanitized = pastedText.replace(/[^a-zA-Z\s]/g, '');

    const input = this.el.nativeElement;
    const maxLen = input.maxLength > 0 ? input.maxLength : undefined;

    const start = input.selectionStart || 0;
    const end = input.selectionEnd || 0;
    const original = input.value || '';
    let newValue = original.slice(0, start) + sanitized + original.slice(end);

    if (maxLen && maxLen > 0) {
      newValue = newValue.slice(0, maxLen);
    }

    input.value = newValue;
    input.dispatchEvent(new Event('input', { bubbles: true }));
  }

  @HostListener('input', ['$event'])
  onInput(): void {
    const input = this.el.nativeElement;
    let value = input.value;

    if (/[^a-zA-Z\s]/.test(value)) {
      value = value.replace(/[^a-zA-Z\s]/g, '');
    }

    const maxLen = input.maxLength > 0 ? input.maxLength : undefined;
    if (maxLen && maxLen > 0 && value.length > maxLen) {
      value = value.slice(0, maxLen);
    }

    if (value !== input.value) {
      input.value = value;
      input.dispatchEvent(new Event('input', { bubbles: true }));
    }
  }
}

/**
 * EnforceMaxLengthDirective
 * Ensures max length is respected strictly even for type="number" or pasted content.
 *
 * Usage:
 *   <input type="text" [enforceMaxLength]="10">
 */
@Directive({
  selector: '[enforceMaxLength], [appEnforceMaxLength]',
  standalone: true
})
export class EnforceMaxLengthDirective {
  @Input() enforceMaxLength: number = 0;

  constructor(private el: ElementRef<HTMLInputElement | HTMLTextAreaElement>) {}

  @HostListener('input', ['$event'])
  onInput(): void {
    const input = this.el.nativeElement;
    const limit = this.enforceMaxLength > 0 ? this.enforceMaxLength : input.maxLength;

    if (limit && limit > 0 && input.value && input.value.length > limit) {
      input.value = input.value.slice(0, limit);
      input.dispatchEvent(new Event('input', { bubbles: true }));
    }
  }
}
