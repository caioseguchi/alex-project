import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-layout',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterModule],
  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.scss',
})
export class PageLayoutComponent implements OnInit {
  //variables
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() nextLink: string = '';

  ngOnInit(): void {
    console.log('📦 nextLink recebido:', this.nextLink);
  }
}
