import React from 'react'

import NewComponent from '.'

export default {
  component: NewComponent,
  title: 'Demo/NewComponent',
  argTypes: {},
  args: {
    text: 'New component text',
  },
  // decorators: [
  //   (Story) => (
  //     <div style={{ backgroundColor: 'lightskyblue' }}>
  //       <Story />
  //     </div>
  //   ),
  // ],
}

const Template = (args) => <NewComponent {...args} />

export const Default = Template.bind({})

export const SecondStory = Template.bind({})
SecondStory.args = {
  text: 'Secondary story text',
}

export const ThirdStory = Template.bind({})
ThirdStory.args = {
  text: 'Third story text',
}
ThirdStory.storyName = 'Third Story (renamed)'
