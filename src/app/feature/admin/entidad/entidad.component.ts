import {Component} from "@angular/core";
import {BasicAutocompleteComponent} from "../../../components/autocompletes/basic-autocomplete.component";
import {BasicHeaderComponent} from "../../../components/header/basic-header/basic-header.component";
import {BasicButtonComponent} from "../../../components/buttons/basic-button/basic-button.component";
import {Router} from "@angular/router";
import {sharedModules} from "../../../shared/shared.module";

@Component({
    selector: "app-entidad",
    templateUrl: "./entidad.component.html",
    styleUrls: ["./entidad.component.scss"],
    standalone: true,
  imports: [
    [...sharedModules],
    BasicAutocompleteComponent,
    BasicHeaderComponent,
    BasicButtonComponent
  ]
})
export class EntidadComponent {

  constructor(
    private router: Router,
  ) {}

  navegateCreate(){
    this.router.navigate(["/home/administracion-entidades/crear"]);
  }
}
