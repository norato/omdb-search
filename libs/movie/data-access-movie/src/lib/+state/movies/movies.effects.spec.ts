import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as MoviesActions from './movies.actions';
import { MoviesEffects } from './movies.effects';

describe('MoviesEffects', () => {
  let actions: Observable<Action>;
  let effects: MoviesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        MoviesEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(MoviesEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: MoviesActions.initMovies() });

      const expected = hot('-a-|', {
        a: MoviesActions.loadMoviesSuccess({ movies: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
