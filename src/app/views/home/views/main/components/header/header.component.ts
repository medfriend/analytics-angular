import {Component, OnInit} from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { BasicPopupComponent } from '../../../../../../components/popupList/basic-popup/basic-popup.component';
import { UserListComponent } from '../../../../../../components/list/user-list/user-list.component';
import { Router } from '@angular/router';
import { clearToken } from '../../../../../../store/auth/auth.actions';
import { Store } from '@ngrx/store';
import { AuthState } from '../../../../../../store/auth/auth.state';
import { StorageService } from '../../../../../../util/localstorage/localstorage.service';
import {sharedModules} from "../../../../../../shared/shared.module";
import {enviroment} from "../../../../../../enviroment/service.enviroment.local";
import {ServiceService} from "../../../../../../core/service/md-service/service.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ... sharedModules,
    BasicPopupComponent,
    UserListComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isUserArrowActive: boolean = false;
  username = ""

  enviromentP = enviroment

  constructor(
    private router: Router,
    private store: Store<{ auth: AuthState }>,
    private localstorageService: StorageService,
    private serviceService: ServiceService
  ){}

  ngOnInit() {
    this.getUserInfo()
  }

  getUserInfo(){
    const userInfo = this.localstorageService.getItem('userInfo')

    // @ts-ignore
    this.username = userInfo.user.nombre_1;
  }

  userArrowActive(){
    this.isUserArrowActive = true
  }

  userArrowDeactive(){
    this.isUserArrowActive = false
  }

  navegateHome() {
    this.router.navigate([`/home`])
  }

  logoutHandler() {
    this.serviceService.getServiceBYPrefijo("admin").subscribe(res => {
      this.store.dispatch(clearToken())
      this.localstorageService.clear()
      const {puerto} = res[0]
      window.location.href = 'http://localhost:' + puerto + '/login';
    })
  }
}
