import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { storePosts } from '../../actions/posts'
import { spaces, breakpoint, colors } from '../../theme'
import sort from '../../utils/sort'
import date from '../../utils/date'
import Loading from '../Loading'
import Failure from '../Failure'
import VoteScore from '../VoteScore'
import Category from './Category'

class PostCards extends Component {
  UNSAFE_componentWillMount() {
    const { category, storePosts } = this.props

    if (category) {
      storePosts({ category })
    } else {
      storePosts()
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { category, storePosts } = this.props
    const nextCategory = nextProps.category

    if (nextCategory !== category) {
      storePosts({ category: nextCategory })
    }
  }

  render() {
    const { category, posts, sortBy } = this.props

    let postsAsArray = Object.keys(posts.data).map(key => posts.data[key])

    if (category) {
      postsAsArray = postsAsArray.filter(post => post.category === category)
    }

    return (
      <div>
        <ul className={css(styles.list)}>
          {sort(postsAsArray, sortBy).map((post, key) => (
            <li className={css(styles.card)} key={key}>
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
                By <strong>{post.author}</strong> on {date(post.timestamp)}
                {!category && <Category path={post.category} />}
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

        {posts.fetching && <Loading />}

        {posts.failure && <Failure error={posts.failure} />}
      </div>
    )
  }
}

PostCards.propTypes = {
  posts: PropTypes.object.isRequired,
  sortBy: PropTypes.string.isRequired,
  storePosts: PropTypes.func.isRequired,
  category: PropTypes.string,
}

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

  card: {
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

const mapStateToProps = ({ posts, sortBy }) => {
  return {
    posts,
    sortBy,
  }
}

const mapDispatchToProps = dispatch => {
  return { storePosts: data => dispatch(storePosts(data)) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostCards)
