import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar as starRegular } from '@fortawesome/free-regular-svg-icons';
import { faStar as starSolid } from '@fortawesome/free-solid-svg-icons';
import { ForRangeDirective } from '@omdb-search/shared';

@Component({
  selector: 'omdb-search-star-rating',
  standalone: true,
  imports: [FontAwesomeModule, ForRangeDirective, NgIf],
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent implements OnInit {
  @Input() rating?: string;
  @Input() topStars?: number;

  calculatedRating = 0;
  faStarSolid = starSolid;
  faStarRegular = starRegular;

  ngOnInit(): void {
    if (this.rating && this.topStars) {
      this.calculatedRating = this.getRating(this.rating, this.topStars);
    }
  }

  getRating(rating: string, topStarts: number): number {
    if (rating.trim().endsWith('%')) {
      const [percent] = rating.split('%').map((value) => parseFloat(value));
      return this.calculateRate(percent, topStarts, 100);
    } else {
      const [rate, base] = rating.split('/').map((value) => parseFloat(value));

      return this.calculateRate(rate, topStarts, base);
    }
  }

  private calculateRate(rate: number, topStarts: number, base: number) {
    const calculatedRating = (rate * topStarts) / base;
    return Math.round(calculatedRating);
  }
}
