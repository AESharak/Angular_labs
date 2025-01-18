import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent {
  @Output() searchQueryChange = new EventEmitter<string>();
  searchText: string = '';

  search(event: Event): void {
    event.preventDefault(); // Prevent form submission
    this.searchQueryChange.emit(this.searchText);
  }
}
