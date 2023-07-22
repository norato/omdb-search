import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HeroComponent } from '@omdb-search/common-ui';
import { MoviesFacadeService } from '@omdb-search/movie/data-access-movie';
import { MovieComponent } from '../../components/movie/movie.component';
import { SearchMovieFormComponent } from '../../components/search-movie-form/search-movie-form.component';

@Component({
  selector: 'omdb-search-search-movie',
  standalone: true,
  imports: [
    HeroComponent,
    SearchMovieFormComponent,
    MovieComponent,
    AsyncPipe,
    NgIf,
  ],
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchMovieComponent {
  private moviesFacade = inject(MoviesFacadeService);

  movies$ = this.moviesFacade.movies$;

  searchMovies(title: string | null) {
    if (title) {
      this.moviesFacade.searchMovies(title);
    } else {
      this.moviesFacade.clearMovies();
    }
  }
}
