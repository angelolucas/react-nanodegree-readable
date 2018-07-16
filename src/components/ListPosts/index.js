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
              <h5>{post.category}</h5>
              <span>{post.voteScore}</span>
              <p>{post.body}</p>
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
  
  post: {
    padding: 20,
    display: 'inline-block',
  }
})

export default ListPosts
