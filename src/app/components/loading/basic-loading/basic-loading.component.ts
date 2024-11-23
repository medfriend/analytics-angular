import {Component, Input, OnChanges} from "@angular/core";
import {sharedModules} from "../../../shared/shared.module";

@Component({
  selector: "app-basic-loading",
  templateUrl: "./basic-loading.component.html",
  styleUrls: ["./basic-loading.component.scss"],
  standalone: true,
  imports: [...sharedModules],
})
export class BasicLoadingComponent implements OnChanges {
  @Input() isLoading: boolean = true;
  @Input() message: string = 'Por favor, espera...';

  overlayClass: string = '';

  ngOnChanges() {
    this.overlayClass = this.isLoading ? 'active' : '';
  }

}
