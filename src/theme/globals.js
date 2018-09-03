import colors from './colors'
import fonts from './fonts'
import spaces from './spaces'

const globals = {
  '*': { boxSizing: 'border-box' },

  body: {
    ...fonts.main,
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

  'h1, h2, h3, h4, h5, h6': { ...fonts.titles },

  // Inline
  a: {
    textDecoration: 'none',
    color: colors.details,
  },

  code: {
    padding: '2px 4px',
    fontSize: '90%',
    color: colors.light,
    backgroundColor: colors.details,
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

  button: {
    ...fonts.main,
    background: 'transparent',
    border: 0,
    cursor: 'pointer',
    outline: 'none',
  },

  // Blocks
  blockquote: {
    padding: '0 1em',
    marginLeft: 0,
    borderLeft: `0.25em solid ${colors.border}`,
  },

  pre: {
    background: colors.dark,
    color: colors.light,
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

  hr: {
    border: 'none',
    borderTop: `1px solid ${colors.border}`,
  },

  // Form
  'input, textarea, select': {
    background: 'white',
    border: `none`,
    boxShadow: 'inset 0 0 1px rgba(0, 0, 0, 0.5)',
    marginBottom: spaces.x1,
    padding: 10,
    outline: 'none',
    width: '100%',
    maxWidth: '100%',
    ...fonts.main,
    fontSize: 16,
  },

  'input::placeholder, textarea::placeholder': {
    ...fonts.main,
    fontSize: 14,
  },

  textarea: {
    display: 'block',
    resize: 'none',
  },

  select: { height: 44 },

  // Table
  table: {
    width: '100%',
    maxWidth: '100%',
    borderSpacing: 0,
  },

  'table > thead > tr > th': {
    verticalAlign: 'bottom',
    borderBottom: `1px solid ${colors.border}`,
    borderTop: 'none',
  },

  th: { textAlign: 'left' },

  'tr th, tr td': {
    padding: 8,
    verticalAlign: 'top',
    borderTop: `1px solid ${colors.border}`,
  },

  // Markdown
  '.markdown': { wordBreak: 'break-word' },

  '.markdown > *:first-child': { marginTop: 0 },

  '.markdown > *:last-child': { marginBottom: 0 },
}

export default globals
