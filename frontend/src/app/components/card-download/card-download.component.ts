import { Component, Input } from '@angular/core';
import { ɵEmptyOutletComponent } from '@angular/router';

@Component({
  selector: 'app-card-download',
  standalone: true,
  imports: [ɵEmptyOutletComponent],
  templateUrl: './card-download.component.html',
  styleUrl: './card-download.component.scss',
})
export class CardDownloadComponent {
  //Variables
  @Input() icon: string = '';
  @Input() cardTitle: string = '';
}
