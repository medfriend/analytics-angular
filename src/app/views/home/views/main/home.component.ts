import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    ControlPanelComponent,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
