import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { StarRatingComponent } from './star-rating.component';

describe('StarRatingComponent', () => {
  let spectator: Spectator<StarRatingComponent>;
  const createComponent = createComponentFactory(StarRatingComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });

  describe('rating up to 100', () => {
    let component: StarRatingComponent;
    beforeEach(() => {
      spectator = createComponent();
      component = spectator.component;
    });
    it('when 75/100', () => {
      expect(component.getRating('75/100', 5)).toEqual(4);
    });
    it('when 50/100', () => {
      expect(component.getRating('50/100', 5)).toEqual(3);
    });
    it('when 100/100', () => {
      expect(component.getRating('100/100', 5)).toEqual(5);
    });
  });
});
