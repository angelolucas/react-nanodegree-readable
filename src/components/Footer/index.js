import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import GitHubSVG from './GitHubSVG'
import { colors, spaces } from '../../theme'

class Footer extends Component {
  render() {
    return (
      <footer className={css(styles.footer)}>
        <div className={css(styles.horizontalLine)}>
          <h5 className={css(styles.content)}>
            <a
              href="https://github.com/angelolucas/react-nanodegree-readable"
              target="_blank"
              rel="noopener noreferrer"
            >
              An Udacity Project.
            </a>
            <GitHubSVG className={css(styles.icon)} />
            <a
              href="https://angelolucas.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              By Ângelo Lucas.
            </a>
          </h5>
        </div>
      </footer>
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    textAlign: 'center',
    marginTop: spaces.x2,
  },

  horizontalLine: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',

    ':before': {
      content: "''",
      position: 'absolute',
      borderBottomWidth: '3px',
      borderBottomStyle: 'solid',
      borderBottomColor: colors.text,
      left: '0',
      top: 'calc(50% - 1px)',
      width: '100%',
    },
  },

  content: {
    display: 'flex',
    background: colors.background,
    position: 'relative',
    padding: 10,
    zIndex: 2,
    lineHeight: '20px',
  },

  icon: {
    marginLeft: 5,
    marginRight: 5,
    fill: colors.text,
  },
})

export default Footer
