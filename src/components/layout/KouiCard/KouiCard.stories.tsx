import React, { ReactElement } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
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
    backgroundColor: { control: 'color', description: 'Background color for the card' },
    borderRadius: { control: 'text', description: 'Border radius for the card' },
    borderColor: { control: 'color', description: 'Border color for the card' },
    shadow: { control: 'text', description: 'Shadow for the card' },
    shadowOpacity: { control: 'number', description: 'Shadow opacity for the card' },
    image: { control: 'string', description: 'Image for the card', defaultValue: null },
    outlined: { control: 'boolean', description: 'Outline style for the card', defaultValue: false },
    dark: { control: 'boolean', description: 'Dark mode for the card', defaultValue: false },
  },
} as Meta;

const TemplateFactory = (title: string, content: string): StoryObj<StoryArgs> => {
  const Template: StoryObj<StoryArgs> = (args: StoryArgs) => {
    return (
      <KouiCard {...args}>
        {title && <h2 style={{ margin: 2 }}>{title}</h2>}
        {content && <p style={{ margin: 2 }}>{content}</p>}
      </KouiCard>
    );
  };

  return Template;
};

export const Playground = TemplateFactory('Default Card', 'This is the default card.');
Playground.args = {
  backgroundColor: '#FFFFFF',
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
  backgroundColor: '#ff6347',
};

export const Clickable = TemplateFactory('Clickable Card', 'This card is clickable.');
Clickable.args = {
  onClick: () => console.log('Card clicked!'),
};
