import colors from './colors'

const buttons = {
  default: {
    background: colors.dark,
    color: colors.light,
    padding: '10px 20px',
    fontSize: 14,
    fontWeight: 'bold',
  },

  light: {
    background: colors.light,
    color: colors.dark,
    padding: '10px 20px',
    fontSize: 14,
    display: 'block',
  },

  small: {
    background: colors.dark,
    color: colors.light,
    padding: '3px 10px',
    fontSize: 12,
    marginLeft: 10,
  },

  smallLight: {
    background: colors.light,
    color: colors.dark,
    padding: '3px 10px',
    fontSize: 12,
    marginLeft: 10,
  },
}

export default buttons
