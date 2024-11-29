import { Component, EventEmitter, Input, Output } from '@angular/core';
import { sharedModules } from '../../shared/shared.module';
import { filterTableComponent } from '../table/filter-table/filter-table.component';
import { BasicAutocompleteComponent } from '../autocompletes/basic-autocomplete.component';

@Component({
  selector: 'app-basic-modal',
  templateUrl: './basic-modal.component.html',
  styleUrls: ['./basic-modal.component.scss'],
  standalone: true,
  imports: [...sharedModules, filterTableComponent, BasicAutocompleteComponent]
})

export class BasicModalComponent {
  @Input() isVisible: boolean = false;

  @Input() titlle: string = '';
  @Output() onClose = new EventEmitter<void>();

  closeModal() {
    this.isVisible = false;
    this.onClose.emit();
  }
}
