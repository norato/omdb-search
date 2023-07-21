import { Meta, StoryObj } from '@storybook/angular';
import { StarRatingComponent } from './star-rating.component';

export default {
  title: 'Components / StarRating',
  component: StarRatingComponent,
} as Meta;

type Story = StoryObj<StarRatingComponent>;

export const StarRating: Story = {
  render: () => ({
    props: {
      topStars: 5,
      rating: '7.5/10',
    },
  }),
};
