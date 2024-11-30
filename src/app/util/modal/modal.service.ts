import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private openModals = 0;

  openModal() {
    this.openModals++;
    if (this.openModals === 1) {
      document.body.classList.add('no-scroll');
    }
  }

  closeModal() {
    this.openModals = Math.max(0, this.openModals - 1);
    if (this.openModals === 0) {
      document.body.classList.remove('no-scroll');
    }
  }
}
