import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { StarRatingComponent } from './star-rating.component';

describe('StarRatingComponent', () => {
  let spectator: Spectator<StarRatingComponent>;
  const createComponent = createComponentFactory(StarRatingComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
