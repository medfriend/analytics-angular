import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import {RouterModule} from "@angular/router";
import {LateralMenuComponent} from "./components/lateral-menu/lateral-menu.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    ControlPanelComponent,
    RouterModule,
    LateralMenuComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
