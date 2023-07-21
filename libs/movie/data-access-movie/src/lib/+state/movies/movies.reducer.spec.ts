import { Action } from '@ngrx/store';

import * as MoviesActions from './movies.actions';
import { MoviesEntity } from './movies.models';
import {
  MoviesState,
  initialMoviesState,
  moviesReducer,
} from './movies.reducer';

describe('Movies Reducer', () => {
  const createMoviesEntity = (id: string, name = ''): MoviesEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Movies actions', () => {
    it('loadMoviesSuccess should return the list of known Movies', () => {
      const movies = [
        createMoviesEntity('PRODUCT-AAA'),
        createMoviesEntity('PRODUCT-zzz'),
      ];
      const action = MoviesActions.loadMoviesSuccess({ movies });

      const result: MoviesState = moviesReducer(initialMoviesState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = moviesReducer(initialMoviesState, action);

      expect(result).toBe(initialMoviesState);
    });
  });
});
