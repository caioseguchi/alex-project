import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-pages',
  standalone: true,
  imports: [],
  templateUrl: './title-pages.component.html',
  styleUrl: './title-pages.component.scss',
})
export class TitlePagesComponent implements OnInit {
  //Variable
  titleMain: string = 'Titulo';
  //Constructor

  //Methods
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
