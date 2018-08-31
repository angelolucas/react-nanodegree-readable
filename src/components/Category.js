import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PostCards from './PostCards'

class Category extends Component {
  findCategory = nextCategory =>
    this.props.categories.find(category => category.path === nextCategory)

  render() {
    const category = this.findCategory(this.props.category)

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

Category.propTypes = {
  category: PropTypes.string.isRequired,
  categories: PropTypes.array,
}

const mapStateToProps = ({ categories }) => ({ categories })

export default connect(mapStateToProps)(Category)
