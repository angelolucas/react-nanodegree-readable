import colors from './colors'
import fonts from './fonts'

const globals = {
  '*': {
    boxSizing: 'borber-box',
  },

  body: {
    fontFamily: fonts.main,
    color: colors.text,
    backgroundColor: colors.background,
    margin: 0,
    overflowX: 'hidden',
    fontSmoothing: 'antialiased',
    textRendering: 'optimizeLegibility',
    '-moz-osx-font-smoothing': 'grayscale',
    '-webkit-font-smoothing': 'antialiased',
  },

  'h1, h2, h3, h4, h5, h6': { margin: 0 },

  ul: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
}

export default globals
