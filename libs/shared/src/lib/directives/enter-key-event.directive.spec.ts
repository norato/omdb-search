import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator';

import { EnterKeyEventDirective } from './enter-key-event.directive';

describe('EnterKeyEventDirective', () => {
  let spectator: SpectatorDirective<EnterKeyEventDirective>;
  const createDirective = createDirectiveFactory(EnterKeyEventDirective);

  it('should change the background color', () => {
    spectator = createDirective(`<div highlight>Testing EnterKeyEventDirective</div>`);

    spectator.dispatchMouseEvent(spectator.element, 'mouseover');

    expect(spectator.element).toHaveStyle({
      backgroundColor: 'rgba(0,0,0, 0.1)'
    });

    spectator.dispatchMouseEvent(spectator.element, 'mouseout');
    expect(spectator.element).toHaveStyle({
      backgroundColor: '#fff'
    });
  });

});
