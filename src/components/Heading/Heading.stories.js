import React from 'react'

import Heading from './'

export default {
  component: Heading,
  title: 'Typography/Heading',
}

const Template = (args) => <Heading {...args} />

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  text: 'Heading Small',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  text: 'Heading Large',
}
