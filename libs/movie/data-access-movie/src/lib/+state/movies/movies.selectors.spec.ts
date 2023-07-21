import { MoviesEntity } from './movies.models';
import {
  moviesAdapter,
  MoviesPartialState,
  initialMoviesState,
} from './movies.reducer';
import * as MoviesSelectors from './movies.selectors';

describe('Movies Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getMoviesId = (it: MoviesEntity) => it.id;
  const createMoviesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as MoviesEntity);

  let state: MoviesPartialState;

  beforeEach(() => {
    state = {
      movies: moviesAdapter.setAll(
        [
          createMoviesEntity('PRODUCT-AAA'),
          createMoviesEntity('PRODUCT-BBB'),
          createMoviesEntity('PRODUCT-CCC'),
        ],
        {
          ...initialMoviesState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Movies Selectors', () => {
    it('selectAllMovies() should return the list of Movies', () => {
      const results = MoviesSelectors.selectAllMovies(state);
      const selId = getMoviesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = MoviesSelectors.selectEntity(state) as MoviesEntity;
      const selId = getMoviesId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectMoviesLoaded() should return the current "loaded" status', () => {
      const result = MoviesSelectors.selectMoviesLoaded(state);

      expect(result).toBe(true);
    });

    it('selectMoviesError() should return the current "error" state', () => {
      const result = MoviesSelectors.selectMoviesError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
