import {Component, Input, OnInit} from "@angular/core";
import {BasicListComponent} from "../basic-list/basic-list.component";
import {sharedModules} from "../../../shared/shared.module";
import {Router} from "@angular/router";
import {RouteIdListComponent} from "../route-id-list/route-id-list.component";

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss'],
  standalone: true,
  imports: [
    ...sharedModules,
    BasicListComponent,
    RouteIdListComponent
  ]
})
export class TableListComponent implements OnInit{

  @Input() id: string | undefined;

  menuItems:any = [];

  constructor(
    private route: Router,
  ) {}

  ngOnInit() {
    this.menuItems.push({icon: "update", label: "Actualizar", route: `${this.route.url}/actualizar?id=${this.id}`, submenus: []});
    this.menuItems.push({icon: "delete", label: "Eliminar", route: `${this.route.url}/eliminar?id=${this.id}`, submenus: []});
  }
}
