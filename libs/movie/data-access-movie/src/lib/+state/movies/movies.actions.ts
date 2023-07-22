import { createAction, props } from '@ngrx/store';
import { MoviesEntity } from './movies.models';

/**
 * Search Movie Actions
 */
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

/**
 * Clear Movie Actions
 */
export const clearMovies = createAction('[Movies Page] Clear Movie');

/**
 * Favorite Movie Actions
 */
export const favoriteMovie = createAction(
  '[Movies Page] Favorite',
  props<{ title: string }>()
);

export const favoriteMovieSuccess = createAction(
  '[Movies/API] Favorite Movie Success',
  props<{ movies: MoviesEntity[] }>()
);

export const favoriteMovieFailure = createAction(
  '[Movies/API] Favorite Movie Failure',
  props<{ error: any }>()
);
