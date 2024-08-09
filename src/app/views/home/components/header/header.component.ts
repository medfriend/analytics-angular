import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { BasicPopupComponent } from '../../../../components/popupList/basic-popup/basic-popup.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { Router } from '@angular/router';
import { clearToken } from '../../../../store/auth/auth.actions';
import { Store } from '@ngrx/store';
import { AuthState } from '../../../../store/auth/auth.state';
import { StorageService } from '../../../../util/localstorage/localstorage.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ 
    MatIconModule, 
    BasicPopupComponent,
    UserListComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isUserArrowActive: boolean = false;

  constructor( 
    private router: Router,
    private store: Store<{ auth: AuthState }>,
    private localstorageService: StorageService
  ){}

  userArrowActive(){
    this.isUserArrowActive = true
  }

  userArrowDeactive(){
    this.isUserArrowActive = false
  }

  logoutHandler(){
    this.store.dispatch(clearToken())
    this.localstorageService.clear()
    this.router.navigate(['/login'])
  }
}
