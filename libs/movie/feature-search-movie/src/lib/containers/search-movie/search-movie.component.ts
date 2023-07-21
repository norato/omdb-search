import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from '@omdb-search/common-ui';

@Component({
  selector: 'omdb-search-search-movie',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchMovieComponent {}
