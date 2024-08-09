import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [ 
    MatIconModule, 
    CommonModule
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  menuItems = [
    { icon: 'manage_accounts', label: 'Cuenta' },
    { icon: 'palette', label: 'Apariencia' },
    { icon: 'tune', label: 'Preferencia' }
  ];
}
