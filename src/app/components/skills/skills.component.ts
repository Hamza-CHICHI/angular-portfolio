import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const inViewport = (entries, observer) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('is-inViewport', entry.isIntersecting);
      });
    };

    const Obs = new IntersectionObserver(inViewport);

    // Attach observer to every [data-inviewport] element:
    const ELs_inViewport = document.querySelectorAll('[progress-bar]');
    ELs_inViewport.forEach((EL) => {
      Obs.observe(EL);
    });
  }
}
