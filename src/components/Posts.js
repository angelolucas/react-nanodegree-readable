import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { spaces, breakpoint, colors } from '../theme'
import VoteScore from './VoteScore'
import date from '../utils/date'

class Posts extends Component {
  render() {
    const { posts } = this.props

    return (
      <ul className={css(styles.list)}>
        {posts.map((post, key) => (
          <li className={css(styles.post)} key={key}>
            <h2 className={css(styles.title)}>
              <Link
                className={css(styles.link)}
                to={`/${post.category}/${post.id}`}
              >
                {post.title}
              </Link>
            </h2>
            <p className={css(styles.summary)}>{post.summary}</p>
            <p className={css(styles.by)}>
              By <strong>{post.author}</strong> on {date(post.timestamp)} -{' '}
              <strong>{post.category}</strong>
            </p>
            <ul className={css(styles.bottomBar)}>
              <li>
                <Icon icon="comment-alt" />
                <strong className={css(styles.commentCount)}>
                  {post.commentCount}
                </strong>
              </li>
              <li>
                <VoteScore
                  id={post.id}
                  contentType="post"
                  score={post.voteScore}
                />
              </li>
              <li>
                <Icon icon="ellipsis-h" />
              </li>
            </ul>
          </li>
        ))}
      </ul>
    )
  }
}

Posts.propTypes = { posts: PropTypes.array.isRequired }

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

  title: {
    marginBottom: 5,
    lineHeight: 1.1,
  },

  link: { color: colors.dark },

  by: {
    fontSize: 14,
    color: colors.gray,
  },

  summary: {
    marginTop: 0,
    fontSize: 14,
    color: colors.gray,
  },

  commentCount: { marginLeft: 5 },

  bottomBar: {
    display: 'flex',
    justifyContent: 'space-between',
    listStyle: 'none',
    fontSize: 14,
    color: colors.gray,
    padding: 0,
    paddingTop: 5,
  },
})

export default Posts
