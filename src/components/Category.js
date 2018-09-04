import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PostCards from './PostCards'
import Failure from './Failure'

class Category extends Component {
  findCategory = nextCategory =>
    this.props.categories.find(category => category.path === nextCategory)

  render() {
    const category = this.findCategory(this.props.category)

    return (
      <div style={{ flex: 1 }}>
        {category ? (
          <div>
            <h1 style={{ marginTop: 0 }}>{category.name}</h1>
            <PostCards category={category.path} />
          </div>
        ) : (
          <Failure error="Category Not Found" />
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
