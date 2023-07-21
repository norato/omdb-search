import { InjectionToken } from '@angular/core';
import { OmdbApiConfig } from './omdb.config';

export const OMDB_API_CONFIG = new InjectionToken<OmdbApiConfig>(
  'OMDB API config'
);
