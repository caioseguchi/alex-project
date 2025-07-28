import { Component, Input } from '@angular/core';
import { PageLayoutComponent } from '../../components/page-layout/page-layout.component';
import { QuoteBoxComponent } from '../../components/quote-box/quote-box.component';
import { CardBoxComponent } from '../../components/card-box/card-box.component';
import { CardDownloadComponent } from '../../components/card-download/card-download.component';

@Component({
  selector: 'app-build-resume',
  standalone: true,
  imports: [
    PageLayoutComponent,
    QuoteBoxComponent,
    CardBoxComponent,
    CardDownloadComponent,
  ],
  templateUrl: './build-resume.component.html',
  styleUrl: './build-resume.component.scss',
})
export class BuildResumeComponent {}
