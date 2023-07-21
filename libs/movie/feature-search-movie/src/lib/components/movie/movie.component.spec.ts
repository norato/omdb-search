import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { MovieComponent } from './movie.component';

describe('MovieComponent', () => {
  let spectator: Spectator<MovieComponent>;
  const createComponent = createComponentFactory(MovieComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
