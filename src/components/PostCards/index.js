import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { StyleSheet, css } from 'aphrodite/no-important'
import { spaces } from '../../theme'
import { storePosts } from '../../actions/posts'
import sort from '../../utils/sort'
import Loading from '../Loading'
import Failure from '../Failure'
import Card from './Card'

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
    const showCategory = category ? false : true
    let postsAsArray = Object.keys(posts.data).map(key => posts.data[key])

    if (category) {
      postsAsArray = postsAsArray.filter(post => post.category === category)
    }

    return (
      <div>
        <ul className={css(styles.list)}>
          {sort(postsAsArray, sortBy).map(post => (
            <Card {...post} showCategory={showCategory} key={post.id} />
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
