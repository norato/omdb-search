import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromMovies from './+state/movies/movies.reducer';
import { MoviesEffects } from './+state/movies/movies.effects';

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
