import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important'
import { spaces, breakpoint, colors } from '../theme'
import VoteScore from './VoteScore'

class Posts extends Component {
  render() {
    const { posts } = this.props

    return (
      <ul className={css(styles.list)}>
        {posts &&
          posts.map((post, key) => (
            <li className={css(styles.post)} key={key}>
              <h2>
                <Link
                  className={css(styles.title)}
                  to={`/${post.category}/${post.id}`}
                >
                  {post.title}
                </Link>
              </h2>
              <p>{post.category}</p>
              <p>By {post.author}</p>
              <p>{post.body}</p>
              <ul className={css(styles.utils)}>
                <li className={css(styles.utilsItem)}>
                  {post.commentCount} Comments
                </li>
                <li className={css(styles.utilsItem)}>
                  <VoteScore
                    score={post.voteScore}
                    contentType="post"
                    contentId={post.id}
                  />
                </li>
                <li className={css(styles.utilsItem)}>edit</li>
              </ul>
            </li>
          ))}
      </ul>
    )
  }
}

Posts.propTypes = { posts: PropTypes.array }

const styles = StyleSheet.create({
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: spaces.x1,
    marginBottom: spaces.x1,
    marginLeft: -spaces.x1,
    marginRight: -spaces.x1,
    padding: 0,
  },

  post: {
    flex: '33%',
    padding: spaces.x1,
    display: 'inline-block',

    [breakpoint.medium]: { flex: '50%' },
    [breakpoint.small]: { flex: '100%' },
  },

  title: { color: colors.dark },

  utils: {
    display: 'flex',
    justifyContent: 'space-between',
    listStyle: 'none',
    padding: 0,
  },
})

export default Posts
