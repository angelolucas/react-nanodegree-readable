import colors from './colors'

const margin = {
  marginRight: 10,

  ':last-child': { marginRight: 0 },
}

const buttons = {
  default: {
    ...margin,
    background: colors.dark,
    color: colors.light,
    padding: '10px 20px',
    fontSize: 14,
    fontWeight: 'bold',

    ':hover': { background: colors.details },
  },

  defaultLight: {
    ...margin,
    background: colors.light,
    color: colors.dark,
    padding: '10px 20px',
    fontSize: 14,
    display: 'block',

    ':hover': { color: colors.details },
  },

  small: {
    ...margin,
    background: colors.dark,
    color: colors.light,
    padding: '3px 10px',
    fontSize: 12,

    ':hover': { background: colors.details },
  },

  smallLight: {
    ...margin,
    background: colors.light,
    color: colors.dark,
    padding: '3px 10px',
    fontSize: 12,

    ':hover': { color: colors.details },
  },
}

export default buttons
