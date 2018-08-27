import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PostCards from './PostCards'

class CategoryPage extends Component {
  findCategory = nextCategory =>
    this.props.categories.find(category => category.path === nextCategory)

  render() {
    const category = this.findCategory(this.props.match.params.category)

    return (
      <div>
        {category && (
          <div>
            <h1>{category.name}</h1>
            <PostCards category={category.path} />
          </div>
        )}
      </div>
    )
  }
}

CategoryPage.propTypes = {
  categories: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
}

const mapStateToProps = ({ categories }) => ({ categories })

export default connect(mapStateToProps)(CategoryPage)
