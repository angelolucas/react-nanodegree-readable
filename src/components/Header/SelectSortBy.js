import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { sortBy } from '../../actions/sortBy'

class SortBy extends Component {
  changeSort = option => {
    this.props.dispatch(sortBy(option))
  }

  render() {
    return (
      <div>
        Sort Content by: {this.props.sortBy}
        <button onClick={() => this.changeSort('date')}>Date</button>
        <button onClick={() => this.changeSort('score')}>Score</button>
      </div>
    )
  }
}

SortBy.propTypes = {
  sortBy: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = ({ sortBy }) => ({ sortBy })

export default connect(mapStateToProps)(SortBy)
