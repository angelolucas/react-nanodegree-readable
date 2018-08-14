import colors from './colors'
import fonts from './fonts'
import spaces from './spaces'

const globals = {
  '*': { boxSizing: 'border-box' },

  body: {
    fontFamily: fonts.main,
    color: colors.dark,
    backgroundColor: colors.light,
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

  'input, textarea': {
    background: 'transparent',
    border: `2px solid ${colors.dark}`,
    marginBottom: spaces.x1,
    padding: 10,
    outline: 'none',
    width: '100%',
    maxWidth: '100%',
    fontFamily: fonts.main,
    fontSize: 16,
  },

  'input::placeholder, textarea::placeholder': {
    fontFamily: fonts.main,
    fontSize: 14,
  },

  textarea: {
    display: 'block',
    resize: 'none',
  },

  button: {
    background: 'transparent',
    fontFamily: fonts.main,
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
  },
}

export default globals
