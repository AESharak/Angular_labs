import { Component, Input, OnInit } from '@angular/core';
import usersData from '../../users.json';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css'],
  imports: [CardComponent],
})
export class CardsListComponent implements OnInit {
  @Input() searchQuery: string = '';
  users: any[] = usersData;
  filteredUsers: any[] = usersData;

  ngOnInit(): void {
    this.filterUsers();
  }

  ngOnChanges(): void {
    this.filterUsers();
  }

  filterUsers(): void {
    this.filteredUsers = this.users.filter((user) =>
      user.username.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
