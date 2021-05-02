import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  @Input()
  url_image: string;

  @Input()
  url_cv: string;

  constructor() {}

  ngOnInit(): void {}
}
