import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'omdb-search-search-movie-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './search-movie-form.component.html',
  styleUrls: ['./search-movie-form.component.scss'],
})
export class SearchMovieFormComponent {
  @Input() placeholder?: string;
  @Output() search = new EventEmitter<string | null>();
  control = new FormControl(null);

  onSearch() {
    this.search.emit(this.control.value);
  }

  onClear() {
    this.control.reset();
    this.search.emit(null);
  }
}
