import { createAction, props } from '@ngrx/store';
import { MoviesEntity } from './movies.models';

export const initMovies = createAction('[Movies Page] Init');

export const loadMoviesSuccess = createAction(
  '[Movies/API] Load Movies Success',
  props<{ movies: MoviesEntity[] }>()
);

export const loadMoviesFailure = createAction(
  '[Movies/API] Load Movies Failure',
  props<{ error: any }>()
);
