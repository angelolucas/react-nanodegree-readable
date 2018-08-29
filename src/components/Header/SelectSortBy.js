import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { sortBy } from '../../actions/sortBy'

class SortBy extends Component {
  changeSort = option => {
    this.props.dispatch(sortBy(option))
  }

  render() {
    return (
      <div>
        {this.props.sortBy === 'score' && <Icon icon="toggle-on" />}
        {this.props.sortBy === 'date' && <Icon icon="toggle-off" />}
        sort by score
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
