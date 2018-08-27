import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PostCards from './PostCards'
import { storeCategories } from '../actions/categories'
import Failure from './Failure'

class CategoryPage extends Component {
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
    const { categories } = this.props
    const findNextCategory = categories.find(
      category => category.path === nextCategory
    )

    if (findNextCategory) {
      this.setState({
        name: findNextCategory.name,
        path: findNextCategory.path,
        notFound: false,
      })
    } else {
      this.setState({ notFound: true })
    }
  }

  render() {
    const { path } = this.state

    return (
      <div>
        <h1>{this.state.name}</h1>
        {path && <PostCards category={path} />}
        {this.state.notFound && <Failure />}
      </div>
    )
  }
}

CategoryPage.propTypes = {
  storeCategories: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
}

const mapStateToProps = ({ categories }) => ({ categories })

const mapDispatchToProps = dispatch => {
  return { storeCategories: () => dispatch(storeCategories()) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryPage)
