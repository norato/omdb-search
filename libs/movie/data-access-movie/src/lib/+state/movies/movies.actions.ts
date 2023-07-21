import { createAction, props } from '@ngrx/store';
import { MoviesEntity } from './movies.models';

export const searchMovies = createAction(
  '[Movies Page] Search',
  props<{ title: string }>()
);

export const searchMoviesSuccess = createAction(
  '[Movies/API] Search Movies Success',
  props<{ movies: MoviesEntity[] }>()
);

export const searchMoviesFailure = createAction(
  '[Movies/API] Search Movies Failure',
  props<{ error: any }>()
);
