import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@omdb-search/movie/feature-search-movie').then(
        (c) => c.SearchMovieComponent
      ),
  },
];
