import React from 'react';
import { ComponentMeta, ComponentStory, storiesOf } from '@storybook/react';

import Button from '../components/Button';
import { ButtonProps } from '../components/Button/Button.types';

const params: ButtonProps = { children: 'Button' };
// storiesOf('Button', module).add('Default', () => <Button variant="outlined">Button</Button>, { params });

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args}>Button</Button>;

export const ButtonComponent = Template.bind({});
