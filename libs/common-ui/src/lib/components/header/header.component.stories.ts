import { RouterTestingModule } from '@angular/router/testing';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { ILink } from '../../interfaces/link.types';
import { HeaderComponent } from './header.component';

export default {
  title: 'Components / Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule],
    }),
  ],
} as Meta;

type Story = StoryObj<HeaderComponent>;

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

export const Header: Story = {
  render: () => ({
    props: {
      brand: {
        title: 'App Title',
        link: '/',
      },
      links,
    },
  }),
};
