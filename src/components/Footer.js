import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { spaces } from '../theme'

class Footer extends Component {
  render() {
    return (
      <footer className={css(styles.footer)}>
        <p className={css(styles.content)}>
          <a
            href="https://github.com/angelolucas/react-nanodegree-readable"
            target="_blank"
            rel="noopener noreferrer"
            className={css(styles.link)}
          >
            An Udacity Project.{' '}
            <FontAwesomeIcon icon={faGithub} className={css(styles.icon)} />
          </a>
          <a
            href="https://angelolucas.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className={css(styles.link)}
          >
            By Ângelo Lucas.
          </a>
        </p>
      </footer>
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    marginTop: spaces.x1,
    textAlign: 'right',
    fontSize: 14,
  },

  content: { margin: 0 },

  icon: {
    marginLeft: 5,
    marginRight: 10,
    fontSize: 18,
  },
})

export default Footer
