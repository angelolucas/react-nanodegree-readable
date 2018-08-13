import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import { spaces } from '../../theme'
import date from '../../utils/date'

class Content extends Component {
  render() {
    const { post } = this.props

    return (
      <main className={css(styles.post)}>
        <h1>{post.title}</h1>
        <p>{post.category}</p>
        <p>By {post.author}</p>
        <p>{date(post.timestamp)}</p>
        <p>{post.body}</p>
        <ul className={css(styles.utils)}>
          <li className={css(styles.utilsItem)}>{post.voteScore} votes</li>
          <li className={css(styles.utilsItem)}>edit</li>
        </ul>
      </main>
    )
  }
}

Content.propTypes = { post: PropTypes.object.isRequired }

const styles = StyleSheet.create({
  post: { marginBottom: spaces.x3 },

  utils: {
    display: 'flex',
    justifyContent: 'space-between',
  },
})

export default Content
