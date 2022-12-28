import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from '../components/Button';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args}>Button</Button>;

export const ButtonComponent = Template.bind({});
