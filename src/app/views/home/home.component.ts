import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ 
    HeaderComponent,
    ControlPanelComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}
