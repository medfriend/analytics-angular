import {Component} from "@angular/core";
import {BasicAutocompleteComponent} from "../../../components/autocompletes/basic-autocomplete.component";
import {BasicHeaderComponent} from "../../../components/header/basic-header/basic-header.component";

@Component({
    selector: 'app-admin-recurso',
    templateUrl: './recurso.component.html',
    styleUrls: ['./recurso.component.scss'],
    imports: [
        BasicAutocompleteComponent,
        BasicHeaderComponent
    ],
    standalone: true
})
export class RecursoAdminComponent {

}
