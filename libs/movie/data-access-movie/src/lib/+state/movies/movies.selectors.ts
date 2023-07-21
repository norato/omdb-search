import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  MOVIES_FEATURE_KEY,
  MoviesState,
  moviesAdapter,
} from './movies.reducer';

// Lookup the 'Movies' feature state managed by NgRx
export const selectMoviesState =
  createFeatureSelector<MoviesState>(MOVIES_FEATURE_KEY);

const { selectAll, selectEntities } = moviesAdapter.getSelectors();

export const selectMoviesLoaded = createSelector(
  selectMoviesState,
  (state: MoviesState) => state.loaded
);

export const selectMoviesError = createSelector(
  selectMoviesState,
  (state: MoviesState) => state.error
);

export const selectAllMovies = createSelector(
  selectMoviesState,
  (state: MoviesState) => selectAll(state)
);

export const selectMoviesEntities = createSelector(
  selectMoviesState,
  (state: MoviesState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectMoviesState,
  (state: MoviesState) => state.selectedId
);

export const selectEntity = createSelector(
  selectMoviesEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
