import { Component } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CardsListComponent } from './cards-list/cards-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [SearchBarComponent, CardsListComponent],
})
export class AppComponent {
  title = 'show users';
  searchQuery: string = '';

  onSearch(query: string): void {
    this.searchQuery = query;
    console.log('search query', query);
  }
}
