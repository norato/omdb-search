import { RouterTestingModule } from '@angular/router/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let spectator: Spectator<HeaderComponent>;
  const createComponent = createComponentFactory({
    component: HeaderComponent,
    imports: [RouterTestingModule],
  });

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
