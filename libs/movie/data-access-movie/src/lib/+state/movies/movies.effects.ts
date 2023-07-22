import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { MoviesService } from '../../services/movies.service';
import * as MoviesActions from './movies.actions';

@Injectable()
export class MoviesEffects {
  private actions$ = inject(Actions);
  private moviesService = inject(MoviesService);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.searchMovies),
      exhaustMap((action) =>
        this.moviesService
          .searchMovieByTitle(action.title)
          .pipe(map((movies) => MoviesActions.searchMoviesSuccess({ movies })))
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(MoviesActions.searchMoviesFailure({ error }));
      })
    )
  );

  favorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.favoriteMovie),
      exhaustMap((action) =>
        this.moviesService
          .favoriteMovie(action.title)
          .pipe(map((movies) => MoviesActions.favoriteMovieSuccess({ movies })))
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(MoviesActions.favoriteMovieFailure({ error }));
      })
    )
  );
}
