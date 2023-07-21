import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { SearchMovieComponent } from './search-movie.component';

describe('SearchMovieComponent', () => {
  let spectator: Spectator<SearchMovieComponent>;
  const createComponent = createComponentFactory(SearchMovieComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
