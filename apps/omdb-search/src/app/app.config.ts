import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, isDevMode } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {
  MOVIES_FEATURE_KEY,
  MoviesEffects,
  OMDB_API_CONFIG,
  OmdbApiConfig,
  moviesReducer,
} from '@omdb-search/movie/data-access-movie';
import { appRoutes } from './app.routes';

const omdbConfig: OmdbApiConfig = {
  baseUrl: 'https://www.omdbapi.com/',
  apiKey: 'f8b8ece9',
};

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: OMDB_API_CONFIG, useValue: omdbConfig },
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideHttpClient(),
    provideStore({ [MOVIES_FEATURE_KEY]: moviesReducer }),
    provideEffects([MoviesEffects]),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
  ],
};
