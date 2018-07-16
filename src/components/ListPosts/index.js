import React, { Component } from 'react'
import PostsMockup from '../../PostsMockup.js'
import { StyleSheet, css } from 'aphrodite/no-important'

class ListPosts extends Component {
  render() {
    return (
      <div>
        <ul className={css(styles.list)}>
          {PostsMockup.map((post, key) => (
            <li className={css(styles.post)} key={key}>
              <h2>{post.title}</h2>
              <p>{post.category}</p>
              <p>By {post.author}</p>
              <p>{post.body}</p>
              <ul className={css(styles.utils)}>
                <li className={css(styles.utilsItem)}>{post.comments} Comments</li>
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
    columnCount: 3,
  },

  utils: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  post: {
    padding: 20,
    display: 'inline-block',
  }
})

export default ListPosts
