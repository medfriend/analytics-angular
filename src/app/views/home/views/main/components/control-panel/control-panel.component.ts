import { CommonModule } from '@angular/common';
import {Component, OnInit} from '@angular/core';
import { ActionPanelComponent } from '../../../../../../components';
import {sharedModules} from "../../../../../../shared/shared.module";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-control-panel',
  standalone: true,
  imports: [
    ...sharedModules,
    ActionPanelComponent
  ],
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.scss'
})
export class ControlPanelComponent implements OnInit {

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd) // Filtrar solo los eventos de NavigationEnd
    ).subscribe(() => {
      console.log('Ruta cambió a:', this.router.url);
    });
  }


}
