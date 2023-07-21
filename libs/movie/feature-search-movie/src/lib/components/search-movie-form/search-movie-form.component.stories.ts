import { RouterTestingModule } from '@angular/router/testing';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { SearchMovieFormComponent } from './search-movie-form.component';

export default {
  title: 'Components / SearchMovieForm',
  component: SearchMovieFormComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule],
    }),
  ],
} as Meta;

type Story = StoryObj<SearchMovieFormComponent>;

export const SearchMovieForm: Story = {
  render: () => ({
    props: {
      placeholder: 'Search',
    },
  }),
};
