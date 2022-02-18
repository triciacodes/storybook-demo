// import PageWrapper from '../src/components/Util/PageWrapper'

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
  //     order: ['Typography', 'Demo'],
  //   },
  // },
  // backgrounds: {
  //   default: 'light',
  //   values: [
  //     {
  //       name: 'light',
  //       value: '#fafafa',
  //     },
  //     {
  //       name: 'dark',
  //       value: '#222',
  //     },
  //     {
  //       name: 'blue',
  //       value: '#5F9EA0',
  //     },
  //   ],
  // },
  // viewport: {
  //   viewports: {
  //     small: {
  //       name: 'Small (custom)',
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
      // <PageWrapper>
      <Story />
      // </PageWrapper>
    )
  },
]
