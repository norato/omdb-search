import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator';

import { ForRangeDirective } from './for-range.directive';

describe('ForRangeDirective', () => {
  let spectator: SpectatorDirective<ForRangeDirective>;
  const createDirective = createDirectiveFactory(ForRangeDirective);

  it('should change the background color', () => {
    spectator = createDirective(`<div highlight>Testing ForRangeDirective</div>`);

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
