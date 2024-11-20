import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostBinding, Input, ViewChild} from '@angular/core';
import {sharedModules} from "../../shared/shared.module";
import {BasicPopupComponent} from "../popupList/basic-popup/basic-popup.component";
import {UserListComponent} from "../list/user-list/user-list.component";

//TODO hacer la anicacion de cierre si funcione
@Component({
  selector: 'app-actionPanel',
  standalone: true,
  imports: [...sharedModules, BasicPopupComponent, UserListComponent],
  templateUrl: './actionPanel.component.html',
  styleUrl: './actionPanel.component.scss'
})export class ActionPanelComponent implements AfterViewInit {
  @HostBinding('style.--startWidth') startWidth = '118px';
  @HostBinding('style.--endWidth') endWidth = '145px';
  @ViewChild('controlPanelModule') controlPanelModule!: ElementRef;
  @Input() panelLabel: string = 'Panel de Control';

  constructor(private cdr: ChangeDetectorRef) {}

  showPopup: boolean = false; // Controla toda la lógica del popup

  ngAfterViewInit(): void {
    this.startWidth = `${this.controlPanelModule.nativeElement.scrollWidth + 1}px`;
    this.endWidth = `${this.controlPanelModule.nativeElement.scrollWidth + 30}px`;
  }

  showPopUp(state: boolean): void {
    this.cdr.detectChanges();
    this.showPopup = state;
  }

}

