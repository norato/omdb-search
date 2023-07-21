import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MoviesEffects } from './+state/movies/movies.effects';
import * as fromMovies from './+state/movies/movies.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromMovies.MOVIES_FEATURE_KEY,
      fromMovies.moviesReducer
    ),
    EffectsModule.forFeature([MoviesEffects]),
  ],
})
export class MovieDataAccessMovieModule {}
