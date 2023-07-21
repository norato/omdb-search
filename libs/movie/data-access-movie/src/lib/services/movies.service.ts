import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesEntity } from '../+state/movies/movies.models';
import { OMDB_API_CONFIG } from '../tokens/omdb.token';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private httpClient = inject(HttpClient);
  private omdbApiConfig = inject(OMDB_API_CONFIG);

  searchMovieByTitle(title: string): Observable<MoviesEntity[]> {
    const { baseUrl, apiKey } = this.omdbApiConfig;

    const url = `${baseUrl}&?apikey=${apiKey}&t=${title}`;

    return this.httpClient.get<MoviesEntity[]>(url);
  }
}
