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
  },

  defaultLight: {
    ...margin,
    background: colors.light,
    color: colors.dark,
    padding: '10px 20px',
    fontSize: 14,
    display: 'block',
  },

  small: {
    ...margin,
    background: colors.dark,
    color: colors.light,
    padding: '3px 10px',
    fontSize: 12,
  },

  smallLight: {
    ...margin,
    background: colors.light,
    color: colors.dark,
    padding: '3px 10px',
    fontSize: 12,
  },
}

export default buttons
