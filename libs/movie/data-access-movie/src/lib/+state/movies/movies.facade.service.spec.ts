import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { MoviesFacadeService } from './movies.facade.service';

describe('MoviesFacadeService', () => {
  let spectator: SpectatorService<MoviesFacadeService>;
  const createService = createServiceFactory(MoviesFacadeService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});