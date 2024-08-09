import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { ToastComponent } from './components/toast/toast.component';
import { Store } from '@ngrx/store';
import { selectToken } from './store/auth/auth.selector';

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
  title = 'Tesoreria Compensación';
  

  constructor(
    private location: Location,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
    if(this.location.path() !== 'login'){
      this.store.select(selectToken).subscribe(token => {
          if(token === null){
            this.router.navigate(['/login'])
          }
      });
    }
  }
}
