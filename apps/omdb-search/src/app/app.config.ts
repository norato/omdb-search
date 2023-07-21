import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import {
  OMDB_API_CONFIG,
  OmdbApiConfig,
} from '@omdb-search/movie/data-access-movie';
import { appRoutes } from './app.routes';

const omdbConfig: OmdbApiConfig = {
  baseUrl: 'https://www.omdbapi.com/',
  apiKey: 'f8b8ece9',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    { provide: OMDB_API_CONFIG, useValue: omdbConfig },
  ],
};
