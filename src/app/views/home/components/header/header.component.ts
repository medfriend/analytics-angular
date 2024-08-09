import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { BasicPopupComponent } from '../../../../components/popupList/basic-popup/basic-popup.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ 
    MatIconModule, 
    CommonModule,
    BasicPopupComponent 
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isUserArrowActive: boolean = false;

  userArrowActive(){
    this.isUserArrowActive = true
  }

  userArrowDeactive(){
    this.isUserArrowActive = false
  }
}
