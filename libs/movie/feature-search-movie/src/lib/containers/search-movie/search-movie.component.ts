import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'omdb-search-search-movie',
  standalone: true,
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchMovieComponent {}
