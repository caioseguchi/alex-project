import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-box',
  standalone: true,
  imports: [],
  templateUrl: './card-box.component.html',
  styleUrl: './card-box.component.scss',
})
export class CardBoxComponent {
  //Variables
  @Input() cardBoxTitle: string = '';
  @Input() cardColor: string = '';
  @Input() cardTextColor: string = '';
}
