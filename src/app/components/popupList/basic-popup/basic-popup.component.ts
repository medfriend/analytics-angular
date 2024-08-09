import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-basic-popup',
  standalone: true,
  imports: [
    MatIconModule, 
    CommonModule,
  ],
  templateUrl: './basic-popup.component.html',
  styleUrl: './basic-popup.component.scss'
})
export class BasicPopupComponent {
  @Input() isUserArrowActive: boolean = false
}
