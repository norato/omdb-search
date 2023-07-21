import { Component, Input } from '@angular/core';

@Component({
  selector: 'omdb-search-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  @Input() title?: string;
  @Input() text?: string;
}
