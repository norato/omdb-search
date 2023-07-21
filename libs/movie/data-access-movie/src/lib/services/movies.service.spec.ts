import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let spectator: SpectatorService<MoviesService>;
  const createService = createServiceFactory(MoviesService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});