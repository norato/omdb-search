import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as MoviesActions from './movies.actions';
import * as MoviesFeature from './movies.reducer';

@Injectable()
export class MoviesEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.initMovies),
      switchMap(() => of(MoviesActions.loadMoviesSuccess({ movies: [] }))),
      catchError((error) => {
        console.error('Error', error);
        return of(MoviesActions.loadMoviesFailure({ error }));
      })
    )
  );
}
