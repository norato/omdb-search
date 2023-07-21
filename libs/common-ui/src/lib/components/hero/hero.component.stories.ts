import { Meta, StoryObj } from '@storybook/angular';
import { HeroComponent } from './hero.component';

export default {
  title: 'Components / Hero',
  component: HeroComponent,
} as Meta;

type Story = StoryObj<HeroComponent>;

export const Hero: Story = {
  render: () => ({
    props: {
      title: 'Any Title',
      text: 'Esse irure voluptate tempor sint quis minim sit. Voluptate voluptate culpa reprehenderit exercitation id labore est amet veniam irure.',
    },
  }),
};
