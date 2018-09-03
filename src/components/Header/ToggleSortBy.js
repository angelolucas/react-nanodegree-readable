import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { changeSortBy } from '../../actions/sortBy'

class ToggleSortBy extends Component {
  toggleSort = () => {
    const { sortBy, dispatch } = this.props
    const toggleValue = sortBy === 'date' ? 'score' : 'date'

    dispatch(changeSortBy(toggleValue))
  }

  render() {
    const { sortBy, dispatch, ...rest } = this.props
    const icon = sortBy === 'score' ? 'toggle-on' : 'toggle-off'

    return (
      <button {...rest} onClick={this.toggleSort}>
        <Icon style={{ marginRight: 5 }} icon={icon} />
        Sort by Score
      </button>
    )
  }
}

ToggleSortBy.propTypes = {
  sortBy: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = ({ sortBy }) => ({ sortBy })

export default connect(mapStateToProps)(ToggleSortBy)
