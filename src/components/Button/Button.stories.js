import React from 'react'

import Button from './'

export default {
  component: Button,
  title: 'Button',
  args: {
    label: 'Button',
    isDisabled: false,
  },
  argTypes: {
    isDisabled: {
      control: {
        type: 'boolean',
      },
    },
    variant: {
      control: {
        type: 'select',
      },
    },
  },
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
}
export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
}

export const Disabled = Template.bind({})
Disabled.args = {
  isDisabled: true,
}
