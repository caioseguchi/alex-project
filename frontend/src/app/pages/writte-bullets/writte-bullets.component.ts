import { Component } from '@angular/core';
import { PageLayoutComponent } from '../../components/page-layout/page-layout.component';
import { QuoteBoxComponent } from '../../components/quote-box/quote-box.component';
import { CardBoxComponent } from '../../components/card-box/card-box.component';

@Component({
  selector: 'app-writte-bullets',
  standalone: true,
  imports: [PageLayoutComponent, QuoteBoxComponent, CardBoxComponent],
  templateUrl: './writte-bullets.component.html',
  styleUrl: './writte-bullets.component.scss',
})
export class WritteBulletsComponent {}
