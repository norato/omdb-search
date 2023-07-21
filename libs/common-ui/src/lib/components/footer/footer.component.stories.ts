import { RouterTestingModule } from '@angular/router/testing';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
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

export const Footer: Story = {
  render: () => ({
    props: {},
  }),
};
