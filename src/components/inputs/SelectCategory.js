import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class SelectCategory extends Component {
  render() {
    const { categories, dispatch, ...rest } = this.props

    return (
      <select name="category" {...rest}>
        <option>Select category</option>
        {categories.map(category => (
          <option value={category.path} key={category.path}>
            {category.name}
          </option>
        ))}
      </select>
    )
  }
}

SelectCategory.propTypes = {
  categories: PropTypes.array,
  dispatch: PropTypes.func,
}

const mapStateToProps = ({ categories }) => ({ categories })

export default connect(mapStateToProps)(SelectCategory)
