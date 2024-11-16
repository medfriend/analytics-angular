import { Component, Inject, InjectionToken } from '@angular/core';
import {BasicListComponent} from "../basic-list/basic-list.component";

// Token para los datos inyectados
export const INJECT_LIST_DATA = new InjectionToken<any>('INJECT_LIST_DATA');

@Component({
  selector: 'app-inject-list',
  templateUrl: './inject-list.component.html',
  styleUrls: ['./inject-list.component.scss'],
  standalone: true,
  imports: [
    BasicListComponent
  ]
})
export class InjectListComponent {
  constructor(@Inject(INJECT_LIST_DATA) protected data: any) {}
}
