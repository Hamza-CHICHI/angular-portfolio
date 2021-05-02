import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss'],
})
export class FormationComponent implements OnInit {
  constructor() {}
  x: number;
  hr: number;

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
  }

  scroll = (event): void => {
    this.x =
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight) +
      window.pageYOffset * 0.001;

    this.hr = window.pageYOffset / window.innerHeight;
    console.log(this.x);
  };
}
