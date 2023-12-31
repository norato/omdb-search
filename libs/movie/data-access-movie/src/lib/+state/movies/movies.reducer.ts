import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as MoviesActions from './movies.actions';
import { MoviesEntity } from './movies.models';

export const MOVIES_FEATURE_KEY = 'movies';

export interface MoviesState extends EntityState<MoviesEntity> {
  selectedId?: string | number; // which Movies record has been selected
  loaded: boolean; // has the Movies list been loaded
  error?: string | null; // last known error (if any)
}

export interface MoviesPartialState {
  readonly [MOVIES_FEATURE_KEY]: MoviesState;
}

export const moviesAdapter: EntityAdapter<MoviesEntity> =
  createEntityAdapter<MoviesEntity>();

export const initialMoviesState: MoviesState = moviesAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const reducer = createReducer(
  initialMoviesState,

  /**
   * Search Movies Reducers
   */
  on(MoviesActions.searchMovies, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),

  on(MoviesActions.searchMoviesSuccess, (state, { movies }) =>
    moviesAdapter.setAll(movies, { ...state, loaded: true })
  ),
  on(MoviesActions.searchMoviesFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  /**
   * Clear Movies Reducers
   */
  on(MoviesActions.clearMovies, (state) =>
    moviesAdapter.setAll([], { ...state, loaded: true })
  ),
  /**
   * Favorite Movies Reducers
   */
  on(MoviesActions.favoriteMovie, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),

  on(MoviesActions.favoriteMovieSuccess, (state, { movies }) =>
    moviesAdapter.setAll(movies, { ...state, loaded: true })
  ),
  on(MoviesActions.favoriteMovieFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function moviesReducer(state: MoviesState | undefined, action: Action) {
  return reducer(state, action);
}
