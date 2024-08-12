import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
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

  @HostBinding('style.--startWidth') startWidth = '118px';
  @HostBinding('style.--endWidth') endWidth = '145px';
  @Input() panelLabel: string = 'Panel de Control'

  ActiveShowAction(elemnet: HTMLElement){
    this.startWidth = `${elemnet.scrollWidth}px `
    this.endWidth = `${elemnet.scrollWidth + 30}px `
    this.showActions = true
  }

  DeactiveShowAction(){
    this.showActions = false
  }
}
