// Card.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import { KouiCard, KouiCardProps } from './KouiCard';

export default {
  component: KouiCard,
  title: 'Components/Card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

type Story = StoryObj<KouiCardProps>;

export const Default: Story = {
  args: {
    title: 'Default Card',
    content: 'This is the default card.',
  },
};

export const ExtraSmall: Story = {
  args: {
    title: 'Extra Small Card',
    content: 'This is an extra small sized card.',
    size: 'xs',
  },
};

export const Small: Story = {
  args: {
    title: 'Small Card',
    content: 'This is a small sized card.',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    title: 'Medium Card',
    content: 'This is a medium sized card.',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    title: 'Large Card',
    content: 'This is a large sized card.',
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    title: 'Extra Large Card',
    content: 'This is an extra large sized card.',
    size: 'xl',
  },
};

export const Filled: Story = {
  args: {
    title: 'Filled Card',
    content: 'This is a filled card.',
    outlined: false,
  },
};

export const Outlined: Story = {
  args: {
    title: 'Outlined Card',
    content: 'This is an outlined card.',
    outlined: true,
  },
};

export const WithImage: Story = {
  args: {
    title: 'Card with Image',
    content: 'This card has an image.',
    image: 'https://placekitten.com/200/300',
  },
};

export const WithCustomBackground: Story = {
  args: {
    title: 'Card with Custom Background',
    content: 'This card has a custom background color.',
    backgroundColor: '#ff6347',
  },
};

export const Clickable: Story = {
  args: {
    title: 'Clickable Card',
    content: 'This card has a click handler. Check the actions tab in the addon panel for logs when it is clicked.',
    onClick: () => console.log('Card clicked!'),
  },
};
