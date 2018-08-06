import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { spaces } from '../../theme'

class Detail extends Component {
  render() {
    const { post } = this.props
    return (
      <main className={css(styles.post)}>
        <h1>{post.title}</h1>
        <p>{post.category}</p>
        <p>By {post.author}</p>
        <p>{post.body}</p>
        <ul className={css(styles.utils)}>
          <li className={css(styles.utilsItem)}>{post.commentCount} Comments</li>
          <li className={css(styles.utilsItem)}>{post.voteScore} votes</li>
          <li className={css(styles.utilsItem)}>edit</li>
        </ul>
      </main>
    )
  }
}

const styles = StyleSheet.create({
  post: {
    padding: spaces.x2,
  },

  utils: {
    display: 'flex',
    justifyContent: 'space-between',
  }
})

export default Detail
