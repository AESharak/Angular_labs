import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  imports: [DatePipe],
})
export class CardComponent {
  @Input() user: any;
}
