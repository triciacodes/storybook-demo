import React from 'react'

import Button from '../components/Button'

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      // options,
    },
    isDisabled: {
      control: {
        type: 'boolean',
      },
    },
  },
}

const Template = (args) => <Button {...args} />

export const StoryName = Template.bind({})
StoryName.args = {
  label: 'Click me',
  variant: 'primary',
}
