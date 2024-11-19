import {Component} from "@angular/core";
import {sharedModules} from "../../shared/shared.module";

@Component({
  selector: 'app-basic-autocomplete',
  styleUrls: ['./basic-autocomplete.component.scss'],
  templateUrl: './basic-autocomplete.component.html',
  standalone: true,
  imports: [ [...sharedModules] ]
})
export class BasicAutocompleteComponent {}
