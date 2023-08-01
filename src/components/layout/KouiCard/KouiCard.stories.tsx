import React, { ReactElement } from 'react';
import type { Meta, Story, StoryObj } from '@storybook/react';
import { KouiCard, KouiCardProps } from './KouiCard';

interface StoryArgs extends KouiCardProps {
  title: string;
  content: string;
}

export default {
  title: 'Components/Card',
  component: KouiCard,
  argTypes: {
    title: { table: { disable: true } },
    content: { table: { disable: true } },
    backgroundColor: {
      control: { type: 'select', options: ['blue', 'green', 'red', 'white', 'black', 'grey', 'dark-grey', 'light-grey', 'yellow'] },
      description: 'Background color for the card',
    },
    borderRadius: { control: { type: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] }, description: 'Border radius for the card', defaultValue: 'md' },
    borderColor: { control: 'color', description: 'Border color for the card' },
    shadow: { control: 'text', description: 'Shadow for the card' },
    shadowOpacity: { control: 'number', description: 'Shadow opacity for the card' },
    image: { control: 'string', description: 'Image for the card', defaultValue: null },
    outlined: { control: 'boolean', description: 'Outline style for the card', defaultValue: false },
    dark: { control: 'boolean', description: 'Dark mode for the card (changes text to white)', defaultValue: false },
  },
} as Meta;

const TemplateFactory = (title: string, content: string) => {
  const Template: Story<StoryArgs> = args => (
    <KouiCard {...args}>
      {title && <h2 style={{ margin: 2 }}>{title}</h2>}
      {content && <p style={{ margin: 2 }}>{content}</p>}
    </KouiCard>
  );
  return Template;
};

export const Playground = TemplateFactory('Default Card', 'This is the default card.');
Playground.args = {
  backgroundColor: 'white',
  borderRadius: 'md',
  borderColor: '#000000',
  shadow: 'md',
  shadowOpacity: 0.5,
  image: 'https://placekitten.com/300/120',
  outlined: false,
  dark: false,
};

export const Filled = TemplateFactory('Filled Card', 'This is a filled card.');
Filled.args = {
  outlined: false,
};

export const Outlined = TemplateFactory('Outlined Card', 'This is an outlined card.');
Outlined.args = {
  outlined: true,
};

export const WithImage = TemplateFactory('Card with Image', 'This card has an image.');
WithImage.args = {
  image: 'https://placekitten.com/400/200',
};

export const WithCustomBackground = TemplateFactory('Card with Custom Background', 'This card has a custom background color.');
WithCustomBackground.args = {
  backgroundColor: 'blue',
};

export const Clickable = TemplateFactory('Clickable Card', 'This card is clickable.');
Clickable.args = {
  onClick: () => console.log('Card clicked!'),
};
