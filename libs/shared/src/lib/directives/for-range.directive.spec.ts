import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator';

import { ForRangeDirective } from './for-range.directive';

describe('ForRangeDirective', () => {
  let spectator: SpectatorDirective<ForRangeDirective>;
  const createDirective = createDirectiveFactory(ForRangeDirective);

  it('should loop in the change ', () => {
    spectator = createDirective(`
      <div *omdbSearchForRange="5; let number = number">
        <p>{{number}}</p>
      </div>`);

    expect(spectator.queryAll('p').length).toBe(5);
    expect(spectator.query('p')?.textContent).toBe('1');
  });
});
