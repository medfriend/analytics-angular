import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { ToastComponent } from './components/toast/toast.component';
import { Store } from '@ngrx/store';
import { selectToken } from './store/auth/auth.selector';
import { StorageService } from './util/localstorage/localstorage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ToastComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'
  ],
})
export class AppComponent implements OnInit {
  title = 'MedFriend';


  constructor(
    private location: Location,
    private router: Router,
    private store: Store,
    private localstorageService: StorageService
  ) {}

  ngOnInit(): void {
    if(this.location.path() !== 'login'){
      this.store.select(selectToken).subscribe(token => {
          const localstoarageToken = this.localstorageService.getItem<String>('token')
          console.log(localstoarageToken)
          if(token === null && localstoarageToken === null){
            this.router.navigate(['/login'])
          }
      });
    }
  }
}
