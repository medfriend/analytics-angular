import {Component, Input } from "@angular/core";
import {sharedModules} from "../../../shared/shared.module";

@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.component.html',
  standalone: true,
  imports: [...sharedModules],
  styleUrls: ['./basic-list.component.scss']
})
export class BasicListComponent {

  @Input() menuItems: any[] | undefined;

  onMouseEnter(item: any): void {
    item.showSubmenu = true; // Muestra el submenú cuando el mouse entra en el ícono
  }

  // Método para manejar el mouseleave en el ícono
  onMouseLeave(item: any): void {
    // Solo cierra el submenú si el ratón no está sobre el submenú
    if (!item.showSubmenu) {
      item.showSubmenu = false;
    }
  }

  // Método para mantener abierto el submenú cuando el ratón entra en el submenú
  onSubmenuEnter(item: any): void {
    item.showSubmenu = true; // Mantiene el submenú abierto si el ratón está dentro
  }

  // Método para cerrar el submenú cuando el ratón sale del submenú
  onSubmenuLeave(item: any): void {
    item.showSubmenu = false; // Cierra el submenú cuando el ratón sale
  }
}
