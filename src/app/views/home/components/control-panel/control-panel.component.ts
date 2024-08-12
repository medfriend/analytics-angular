import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-control-panel',
  standalone: true,
  imports: [ 
    MatIconModule,
    CommonModule
  ],
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.scss'
})
export class ControlPanelComponent {
  showActions = false;

  ActiveShowAction(){
    this.showActions = true
    console.log("entro")
  }

  DeactiveShowAction(){
    this.showActions = false
    console.log("salio")
  }
}
