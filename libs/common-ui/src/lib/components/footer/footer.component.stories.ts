import { RouterTestingModule } from '@angular/router/testing';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { ILink } from '../../interfaces/link.types';
import { FooterComponent } from './footer.component';

export default {
  title: 'Components / Footer',
  component: FooterComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule],
    }),
  ],
} as Meta;

type Story = StoryObj<FooterComponent>;

const links: ILink[] = [
  {
    link: '/page-1',
    title: 'Page-1',
  },
  {
    link: '/page-2',
    title: 'Page-2',
  },
  {
    link: '/page-3',
    title: 'Page-3',
  },
];

export const Footer: Story = {
  render: () => ({
    props: {
      copyright: 'Big Company Inc.',
      links,
    },
  }),
};
