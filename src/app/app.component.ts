import { CommonModule } from '@angular/common';
import { ToastComponent } from './components/toast/toast.component';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

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
  title = 'Tesoreria Compensacion';

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    console.log(this.router.url)
  }
}
