import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { searchMovies } from './movies.actions';
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
}
