import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { spaces, breakpoint } from '../theme'

class ListPosts extends Component {
  render() {
    const { posts } = this.props

    return (
      <div>
        <ul className={css(styles.list)}>
          {posts && posts.map((post, key) => (
            <li className={css(styles.post)} key={key}>
              <h2>{post.title}</h2>
              <p>{post.category}</p>
              <p>By {post.author}</p>
              <p>{post.body}</p>
              <ul className={css(styles.utils)}>
                <li className={css(styles.utilsItem)}>{post.commentCount} Comments</li>
                <li className={css(styles.utilsItem)}>{post.voteScore} votes</li>
                <li className={css(styles.utilsItem)}>edit</li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  list: {
    display: 'flex',
    flexWrap: 'wrap'
  },

  post: {
    flex: '33%',
    padding: spaces.x2,
    display: 'inline-block',

    [breakpoint.medium]: {
      flex: '50%'
    },
    [breakpoint.small]: {
      flex: '100%',
      padding: spaces.x1
    }
  },

  utils: {
    display: 'flex',
    justifyContent: 'space-between',
  }
})

export default ListPosts
