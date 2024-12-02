import {Component, Input} from "@angular/core";
import {BasicAutocompleteComponent} from "../../autocompletes/basic-autocomplete.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-basic-header',
  templateUrl: './basic-header.component.html',
  styleUrls: ['./basic-header.component.scss'],
  imports: [
    BasicAutocompleteComponent, CommonModule
  ],
  standalone: true
})
export class BasicHeaderComponent {
  @Input() headerName: string = '';
}
