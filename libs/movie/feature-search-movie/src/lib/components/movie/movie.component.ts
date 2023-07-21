import { NgIf, NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart as heartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartSolid } from '@fortawesome/free-solid-svg-icons';
import { StarRatingComponent } from '@omdb-search/common-ui';
import { MoviesEntity } from '@omdb-search/movie/data-access-movie';

@Component({
  selector: 'omdb-search-movie',
  standalone: true,
  imports: [NgIf, NgOptimizedImage, StarRatingComponent, FontAwesomeModule],
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {
  @Input() movie?: MoviesEntity;
  @Output() favorite = new EventEmitter();
  heartRegular = heartRegular;
  heartSolid = heartSolid;

  makeFavorites() {
    this.favorite.next(this.movie);
  }
}
