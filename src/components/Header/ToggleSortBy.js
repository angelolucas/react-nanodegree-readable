import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { StyleSheet, css } from 'aphrodite/no-important'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { sortBy } from '../../actions/sortBy'

class ToggleSortBy extends Component {
  toggleSort = () => {
    if (this.props.sortBy === 'date') this.props.dispatch(sortBy('score'))
    else this.props.dispatch(sortBy('date'))
  }

  render() {
    const { sortBy, dispatch, ...rest } = this.props
    const icon = sortBy === 'score' ? 'toggle-on' : 'toggle-off'

    return (
      <button {...rest} onClick={this.toggleSort}>
        Sort by Score
        <Icon className={css(styles.icon)} icon={icon} />
      </button>
    )
  }
}

ToggleSortBy.propTypes = {
  sortBy: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({ icon: { width: '27px!important' } })

const mapStateToProps = ({ sortBy }) => ({ sortBy })

export default connect(mapStateToProps)(ToggleSortBy)
