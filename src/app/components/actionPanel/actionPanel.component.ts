import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostBinding, Input, OnInit, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {sharedModules} from "../../shared/shared.module";

@Component({
  selector: 'app-actionPanel',
  standalone: true,
  imports: [...sharedModules ],
  templateUrl: './actionPanel.component.html',
  styleUrl: './actionPanel.component.scss'
})
export class ActionPanelComponent  implements AfterViewInit{
  showActions = false;

  @HostBinding('style.--startWidth') startWidth = '118px';
  @HostBinding('style.--endWidth') endWidth = '145px';
  @ViewChild('controlPanelModule') controlPanelModule!: ElementRef
  @Input() panelLabel: string = 'Panel de Control'

  ngAfterViewInit(): void {
    this.startWidth = `${this.controlPanelModule.nativeElement.scrollWidth + 1}px`
    this.endWidth = `${this.controlPanelModule.nativeElement.scrollWidth + 30}px `
  }

  ActiveShowAction(){
    this.showActions = true
  }

  DeactiveShowAction(){
    this.showActions = false
  }
}
