import {
  byPlaceholder,
  createComponentFactory,
  Spectator,
} from '@ngneat/spectator';

import { EnterKeyEventDirective } from './enter-key-event.directive';

import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-any-selector',
  standalone: true,
  imports: [EnterKeyEventDirective],
  template: `<input
    placeholder="my-input"
    (omdbSearchEnterKeyEvent)="anyFucntion($event)"
  /> `,
})
class NameComponent {
  anyFucntion() {
    return;
  }
}

describe('EnterKeyEventDirective', () => {
  let spectator: Spectator<NameComponent>;

  const createComponent = createComponentFactory(NameComponent);

  beforeEach(() => (spectator = createComponent()));
  it('should change the background color', () => {
    const component = spectator.component;
    const anyFucntion = jest.spyOn(component, 'anyFucntion');

    spectator.dispatchKeyboardEvent(
      byPlaceholder('my-input'),
      'keyup',
      'Enter'
    );

    expect(anyFucntion).toHaveBeenCalled();
  });
});
