import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class SelectCategory extends Component {
  render() {
    const { categories } = this.props

    return (
      <select name="category">
        <option>Select category</option>
        {categories.map(category => (
          <option key={category.path} value={category.path}>
            {category.name}
          </option>
        ))}
      </select>
    )
  }
}

SelectCategory.propTypes = { categories: PropTypes.array }

const mapStateToProps = ({ categories }) => ({ categories })

export default connect(mapStateToProps)(SelectCategory)
