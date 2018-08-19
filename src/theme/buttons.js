import colors from './colors'
import fonts from './fonts'

const format = {
  fontFamily: fonts.main,
  cursor: 'pointer',
  border: 'none',
  outline: 'none',
  marginRight: 10,

  ':last-child': { marginRight: 0 },
}

const buttons = {
  default: {
    ...format,
    background: colors.dark,
    color: colors.light,
    padding: '10px 20px',
    fontSize: 14,
    fontWeight: 'bold',
  },

  defaultLight: {
    ...format,
    background: colors.light,
    color: colors.dark,
    padding: '10px 20px',
    fontSize: 14,
    display: 'block',
  },

  small: {
    ...format,
    background: colors.dark,
    color: colors.light,
    padding: '3px 10px',
    fontSize: 12,
  },

  smallLight: {
    ...format,
    background: colors.light,
    color: colors.dark,
    padding: '3px 10px',
    fontSize: 12,
  },
}

export default buttons
