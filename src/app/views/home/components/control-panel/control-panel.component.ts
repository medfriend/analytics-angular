import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActionPanelComponent } from '../../../../components/actionPanel/actionPanel.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-control-panel',
  standalone: true,
  imports: [ 
    MatIconModule,
    CommonModule,
    ActionPanelComponent
    
  ],
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.scss'
})
export class ControlPanelComponent {

}
