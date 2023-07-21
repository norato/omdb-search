import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { SearchMovieFormComponent } from './search-movie-form.component';

describe('SearchMovieFormComponent', () => {
  let spectator: Spectator<SearchMovieFormComponent>;
  const createComponent = createComponentFactory(SearchMovieFormComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
