import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;

  const createComponent = createComponentFactory(AppComponent);

  beforeEach(() => (spectator = createComponent()));

  it('should be created', () => {
    expect(spectator.component).toBeTruthy();
  });
});
