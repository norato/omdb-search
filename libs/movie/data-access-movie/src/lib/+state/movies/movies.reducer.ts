import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

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
  on(MoviesActions.initMovies, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(MoviesActions.loadMoviesSuccess, (state, { movies }) =>
    moviesAdapter.setAll(movies, { ...state, loaded: true })
  ),
  on(MoviesActions.loadMoviesFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function moviesReducer(state: MoviesState | undefined, action: Action) {
  return reducer(state, action);
}
