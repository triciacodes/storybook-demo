import React from 'react'

import Component from './'

export default {
  component: Component,
  title: 'Component',
}

const Template = (args) => <Component {...args} />

export const StoryName = Template.bind({})
StoryName.args = {
  label: 'Click me',
  variant: 'primary',
}
