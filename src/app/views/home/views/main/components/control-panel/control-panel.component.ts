import { CommonModule } from '@angular/common';
import {Component, OnInit} from '@angular/core';
import { ActionPanelComponent } from '../../../../../../components';
import {sharedModules} from "../../../../../../shared/shared.module";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";
import {UserListComponent} from "../user-list/user-list.component";

@Component({
  selector: 'app-control-panel',
  standalone: true,
  imports: [
    ...sharedModules,
    ActionPanelComponent,
    UserListComponent
  ],
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.scss'
})
export class ControlPanelComponent implements OnInit {

  constructor(
    private router: Router,
  ) {}

  routes: string[] = [];

  userName = 'Diego';

  ngOnInit() {
    this.initRoutes()
    this.convertRoute()
  }

  initRoutes(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.convertRoute()
    });
  }

  convertRoute(): void {
    const routesAux = this.router.url.split("/");
    routesAux.splice(0, 2);

    this.routes = routesAux.map(route =>
      route === 'user' ? this.userName : route
    );
  }
}
