import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PostCards from './PostCards'
import { storePosts } from '../actions/posts'
import { storeCategories } from '../actions/categories'
import sort from '../utils/sort'
import Loading from './Loading'
import Failure from './Failure'

class Category extends Component {
  state = {
    name: '',
    path: '',
    notFound: false,
  }

  UNSAFE_componentWillMount() {
    const { storeCategories, match } = this.props

    storeCategories().then(() => this.findCategory(match.params.category))
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const currentCategory = this.props.match.params.category
    const nextCategory = nextProps.match.params.category

    if (nextCategory !== currentCategory) {
      this.findCategory(nextCategory)
    }
  }

  findCategory = nextCategory => {
    const { categories, storePosts } = this.props
    const findNextCategory = categories.find(
      category => category.path === nextCategory
    )

    if (findNextCategory) {
      this.setState({
        name: findNextCategory.name,
        path: findNextCategory.path,
        notFound: false,
      })

      storePosts({ category: findNextCategory.path })
    } else {
      this.setState({ notFound: true })
    }
  }

  render() {
    const { sortBy, posts } = this.props
    const postsAsArray = Object.keys(posts.data).map(key => posts.data[key])
    const postsByCategory = postsAsArray.filter(
      post => post.category === this.state.path
    )

    return (
      <div>
        <h1>{this.state.name}</h1>
        <PostCards posts={sort(postsByCategory, sortBy)} showCategory={false} />
        {posts.fetching && <Loading />}
        {this.state.notFound && <Failure error={posts.failure} />}
      </div>
    )
  }
}

Category.propTypes = {
  posts: PropTypes.object.isRequired,
  sortBy: PropTypes.string.isRequired,
  storePosts: PropTypes.func.isRequired,
  storeCategories: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
}

const mapStateToProps = ({ posts, sortBy, categories }) => ({
  posts,
  sortBy,
  categories,
})

const mapDispatchToProps = dispatch => {
  return {
    storeCategories: () => dispatch(storeCategories()),
    storePosts: data => dispatch(storePosts(data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category)
