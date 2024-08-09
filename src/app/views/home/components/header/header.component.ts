import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { BasicPopupComponent } from '../../../../components/popupList/basic-popup/basic-popup.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ 
    MatIconModule, 
    CommonModule,
    BasicPopupComponent,
    UserListComponent 
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isUserArrowActive: boolean = false;

  constructor( private router: Router){}

  userArrowActive(){
    this.isUserArrowActive = true
  }

  userArrowDeactive(){
    this.isUserArrowActive = false
  }

  logoutHandler(){
    this.router.navigate(['/login'])
  }
}
