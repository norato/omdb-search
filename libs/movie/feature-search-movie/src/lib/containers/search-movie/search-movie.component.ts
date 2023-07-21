import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from '@omdb-search/common-ui';
import { MovieDataAccessMovieModule } from '@omdb-search/movie/data-access-movie';
import { MovieComponent } from '../../components/movie/movie.component';
import { SearchMovieFormComponent } from '../../components/search-movie-form/search-movie-form.component';

@Component({
  selector: 'omdb-search-search-movie',
  standalone: true,
  imports: [
    HeroComponent,
    SearchMovieFormComponent,
    MovieComponent,
    MovieDataAccessMovieModule,
  ],
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchMovieComponent {

}
