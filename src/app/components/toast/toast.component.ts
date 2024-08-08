import { CommonModule } from '@angular/common';
import { Component, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toasts: { message: string, type: string }[] = [];

  addToast(message: string, type: string): void {
    this.toasts.push({ message, type });
    setTimeout(() => this.removeToast(), 3000);
  }

  getToasts(): { message: string, type: string }[] {
    return this.toasts;
  }

  private removeToast(): void {
    this.toasts.shift();
  }
}

@Component({
  selector: 'app-toast',
  standalone: true,
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
  imports:[ CommonModule ]
})
export class ToastComponent {
  constructor(public toastService: ToastService) {}
}
