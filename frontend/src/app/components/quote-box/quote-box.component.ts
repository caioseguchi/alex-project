import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quote-box',
  standalone: true,
  imports: [],
  templateUrl: './quote-box.component.html',
  styleUrl: './quote-box.component.scss',
})
export class QuoteBoxComponent {
  //variables
  @Input() author: string = '';
}
