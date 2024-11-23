import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { ToastComponent } from './components';
import { Store } from '@ngrx/store';
import { selectToken } from './store/auth/auth.selector';
import { StorageService } from './util/localstorage/localstorage.service';
import {BasicLoadingComponent} from "./components/loading/basic-loading/basic-loading.component";
import {LoadingTunnel} from "./core/tunnel/loading/loading.tunnel";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ToastComponent,
    CommonModule,
    BasicLoadingComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'
  ],
})
export class AppComponent implements OnInit {

  isLoading: boolean = false;

  constructor(
    private location: Location,
    private router: Router,
    private store: Store,
    private localstorageService: StorageService,
    private loadingTunnel: LoadingTunnel
  ) {}

  ngOnInit(): void {

    this.loadingTunnel.loading$.subscribe(loadingTunnel => {
      this.isLoading = loadingTunnel;
    })

    if(this.location.path() !== 'login'){
      this.store.select(selectToken).subscribe(token => {
          const localstoarageToken = this.localstorageService.getItem<String>('token')
          if(token === null && localstoarageToken === null){
            this.router.navigate(['/login'])
          }
      });
    }
  }
}
