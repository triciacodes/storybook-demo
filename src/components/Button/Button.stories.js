import React from 'react'

import Button from './'

export default {
  component: Button,
  title: 'Button',
  args: {},
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
