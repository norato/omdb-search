import { RouterTestingModule } from '@angular/router/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;

  const createComponent = createComponentFactory({
    component: AppComponent,
    imports: [RouterTestingModule],
  });

  beforeEach(() => (spectator = createComponent()));

  it('should be created', () => {
    expect(spectator.component).toBeTruthy();
  });
});
