import colors from './colors'
import fonts from './fonts'

const globals = {
  '*': { boxSizing: 'border-box' },

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

  a: {
    textDecoration: 'none',
    color: 'inherit',
  },

  'input, textarea, button': { outline: 'none' },

  'input::placeholder, textarea::placeholder': {
    fontFamily: fonts.main,
    fontSize: 14,
  },

  button: {
    fontFamily: fonts.main,
    cursor: 'pointer',
    border: 'none',
  },
}

export default globals
