import React from 'react'

import Text from '.'

export default {
  component: Text,
  title: 'Text',
  args: {
    color: 'black',
    size: 'small',
    text: 'Text Small:  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
}

const Template = (args) => <Text {...args} />

export const Default = Template.bind({})
Default.args = {}
