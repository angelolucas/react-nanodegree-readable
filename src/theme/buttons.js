import colors from './colors'
import fonts from './fonts'

const format = {
  fontFamily: fonts.main,
  cursor: 'pointer',
  border: 'none',
  outline: 'none',
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

  light: {
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
    marginLeft: 10,
  },

  smallLight: {
    ...format,
    background: colors.light,
    color: colors.dark,
    padding: '3px 10px',
    fontSize: 12,
    marginLeft: 10,
  },
}

export default buttons
