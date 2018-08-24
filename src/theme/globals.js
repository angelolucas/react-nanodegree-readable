import colors from './colors'
import fonts from './fonts'
import spaces from './spaces'

const globals = {
  '*': { boxSizing: 'border-box' },

  body: {
    fontFamily: fonts.main,
    color: colors.dark,
    fill: colors.dark,
    backgroundColor: colors.light,
    margin: 0,
    overflowX: 'hidden',
    fontSmoothing: 'antialiased',
    textRendering: 'optimizeLegibility',
    '-moz-osx-font-smoothing': 'grayscale',
    '-webkit-font-smoothing': 'antialiased',
  },

  // Inline
  a: {
    textDecoration: 'none',
    color: '#0366d6',
  },

  code: {
    padding: '2px 4px',
    fontSize: '90%',
    color: 'black',
    backgroundColor: '#e0e0e0',
    borderRadius: '4px',
    fontFamily: [
      'SFMono-Regular',
      'Consolas',
      'Liberation Mono',
      'Menlo',
      'Courier',
      'monospace',
    ],
  },

  // Blocks
  blockquote: {
    padding: '0 1em',
    marginLeft: 0,
    borderLeft: '0.25em solid',
  },

  pre: {
    background: colors.dark,
    color: colors.light,
    border: '2px solid',
    padding: spaces.x1,
  },

  'pre code': {
    padding: 0,
    fontSize: 'inherit',
    color: 'inherit',
    whiteSpace: 'pre-wrap',
    backgroundColor: 'transparent',
    borderRadius: 0,
  },

  img: { maxWidth: '100%' },

  // Form
  'input, textarea, select': {
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

  // Table
  table: {
    width: '100%',
    maxWidth: '100%',
    borderSpacing: 0,
  },

  'table > thead > tr > th': {
    verticalAlign: 'bottom',
    borderBottom: '2px solid',
    borderTop: 'none',
  },

  th: { textAlign: 'left' },

  'tr th, tr td': {
    padding: 8,
    verticalAlign: 'top',
    borderTop: '1px solid',
  },
}

export default globals
