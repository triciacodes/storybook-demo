// import StoryWrapper from '../src/components/StoryWrapper'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // options: {
  //   storySort: {
  //     order: ['Composite', 'Core'],
  //   },
  // },
  // viewport: {
  //   viewports: {
  //     small: {
  //       name: 'Small',
  //       styles: {
  //         width: '600px',
  //         height: '100%',
  //       },
  //     },
  //     medium: {
  //       name: 'Medium',
  //       styles: {
  //         width: '900px',
  //         height: '100%',
  //       },
  //     },
  //     large: {
  //       name: 'Large',
  //       styles: {
  //         width: '1200px',
  //         height: '100%',
  //       },
  //     },
  //   },
  // },
}

export const decorators = [
  (Story, context) => {
    // const globalContext = context.globals

    return (
      // <StoryWrapper>
      <Story />
      // </StoryWrapper>
    )
  },
]
