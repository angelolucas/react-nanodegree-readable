import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important'
import { spaces, breakpoint } from '../theme'
import slugify from '../utils/slugify'

class Posts extends Component {
  render() {
    const { posts } = this.props

    return (
      <div>
        <ul className={css(styles.list)}>
          {posts.map((post, key) => (
            <li className={css(styles.post)} key={key}>
              <h2><Link to={`/${post.category}/${slugify(post.title)}`}>{post.title}</Link></h2>
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

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
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

export default Posts
