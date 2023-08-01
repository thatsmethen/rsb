import type { Meta, StoryObj } from '@storybook/react';
import { ReactElement } from 'react';
import { KouiCard, KouiCardProps } from './KouiCard';

export default {
  title: 'Components/Card',
  component: KouiCard,
  argTypes: {
    backgroundColor: { control: 'color', description: 'Background color for the card' },
    borderRadius: { control: 'text', description: 'Border radius for the card' },
    borderColor: { control: 'color', description: 'Border color for the card' },
    shadow: { control: 'text', description: 'Shadow for the card' },
    shadowOpacity: { control: 'number', description: 'Shadow opacity for the card' },
    image: { control: 'input', description: 'Image for the card' },
    outlined: { control: 'boolean', description: 'Outline style for the card', defaultValue: false },
    dark: { control: 'boolean', description: 'Dark mode for the card', defaultValue: false },
  },
} as Meta;

type StoryArgs = KouiCardProps & { title: string; content: string };

const Template: ({ title, content, ...args }: StoryArgs) => ReactElement = ({ title, content, ...args }: StoryArgs) => (
  <KouiCard {...args}>
    <h2>{title}</h2>
    <p>{content}</p>
  </KouiCard>
);

export const Playground: StoryObj<StoryArgs> = {
  ...Template,
  args: {
    title: 'Playground Card',
    content: 'This is the playground card.',
    backgroundColor: '#FFFFFF',
    borderRadius: 'md',
    borderColor: '#000000',
    shadow: 'md',
    shadowOpacity: 0.5,
    image: 'https://placekitten.com/200/300',
    outlined: false,
    dark: false,
  },
};

export const Filled: StoryObj<StoryArgs> = {
  ...Template,
  args: {
    title: 'Filled Card',
    content: 'This is a filled card.',
    outlined: false,
  },
};

export const Outlined: StoryObj<StoryArgs> = {
  ...Template,
  args: {
    title: 'Outlined Card',
    content: 'This is an outlined card.',
    outlined: true,
  },
};

export const WithImage: StoryObj<StoryArgs> = {
  ...Template,
  args: {
    title: 'Card with Image',
    content: 'This card has an image.',
    image: 'https://placekitten.com/200/300',
  },
};

export const WithCustomBackground: StoryObj<StoryArgs> = {
  ...Template,
  args: {
    title: 'Card with Custom Background',
    content: 'This card has a custom background color.',
    backgroundColor: '#ff6347',
  },
};

export const Clickable: StoryObj<StoryArgs> = {
  ...Template,
  args: {
    title: 'Clickable Card',
    content: 'This card is clickable.',
    onClick: () => console.log('Card clicked!'),
  },
};
