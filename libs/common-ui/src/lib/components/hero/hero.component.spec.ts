import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { HeroComponent } from './hero.component';

describe('HeroComponent', () => {
  let spectator: Spectator<HeroComponent>;
  const createComponent = createComponentFactory(HeroComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
