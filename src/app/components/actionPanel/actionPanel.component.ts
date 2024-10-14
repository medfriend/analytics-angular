import { AfterViewInit, Component, ElementRef, HostBinding, Input, ViewChild } from '@angular/core';
import {sharedModules} from "../../shared/shared.module";
import {BasicPopupComponent} from "../popupList/basic-popup/basic-popup.component";
import {UserListComponent} from "../../views/home/views/main/components/user-list/user-list.component";

@Component({
  selector: 'app-actionPanel',
  standalone: true,
  imports: [...sharedModules, BasicPopupComponent, UserListComponent],
  templateUrl: './actionPanel.component.html',
  styleUrl: './actionPanel.component.scss'
})
export class ActionPanelComponent  implements AfterViewInit{
  showActions = false;

  @HostBinding('style.--startWidth') startWidth = '118px';
  @HostBinding('style.--endWidth') endWidth = '145px';
  @ViewChild('controlPanelModule') controlPanelModule!: ElementRef
  @Input() panelLabel: string = 'Panel de Control'

  showPopup: boolean = false;

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

  showPopUp(){
    this.showPopup = !this.showPopup
  }
}
