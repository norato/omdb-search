import { RouterTestingModule } from '@angular/router/testing';
import { MoviesEntity } from '@omdb-search/movie/data-access-movie';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { MovieComponent } from './movie.component';

export default {
  title: 'Components / Movie',
  component: MovieComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule],
    }),
  ],
} as Meta;

type Story = StoryObj<MovieComponent>;

const movie: MoviesEntity = {
  id: 'movie',
  Title: 'Batman',
  Year: '1989',
  Rated: 'PG-13',
  Released: '23 Jun 1989',
  Runtime: '126 min',
  Genre: 'Action, Adventure',
  Director: 'Tim Burton',
  Writer: 'Bob Kane, Sam Hamm, Warren Skaaren',
  Actors: 'Michael Keaton, Jack Nicholson, Kim Basinger',
  Plot: 'The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.',
  Language: 'English, French, Spanish',
  Country: 'United States, United Kingdom',
  Awards: 'Won 1 Oscar. 10 wins & 26 nominations total',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg',
  Ratings: [
    { Source: 'Internet Movie Database', Value: '7.5/10' },
    { Source: 'Rotten Tomatoes', Value: '74%' },
    { Source: 'Metacritic', Value: '69/100' },
  ],
  Metascore: '69',
  imdbRating: '7.5',
  imdbVotes: '390,458',
  imdbID: 'tt0096895',
  Type: 'movie',
  DVD: '22 Aug 1997',
  BoxOffice: '$251,409,241',
  Production: 'N/A',
  Website: 'N/A',
  Response: 'True',
};

export const Movie: Story = {
  render: () => ({
    props: {
      movie,
    },
  }),
};
