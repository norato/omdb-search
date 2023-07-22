import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { clearMovies, favoriteMovie, searchMovies } from './movies.actions';
import { selectAllMovies } from './movies.selectors';

@Injectable({
  providedIn: 'root',
})
export class MoviesFacadeService {
  private store = inject(Store);

  movies$ = this.store.select(selectAllMovies);

  searchMovies(title: string) {
    this.store.dispatch(searchMovies({ title }));
  }

  clearMovies() {
    this.store.dispatch(clearMovies());
  }

  favoriteMovie(title: string) {
    this.store.dispatch(favoriteMovie({ title }));
  }
}
