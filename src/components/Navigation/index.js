import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { StyleSheet, css } from 'aphrodite/no-important'
import { colors } from '../../theme'
import ToolsBar from './ToolsBar'
import PostCards from '../PostCards'

class Navigation extends Component {
  state = {
    search: '',
    category: '',
  }

  UNSAFE_componentWillMount() {
    this.category(this.props.category)
  }

  UNSAFE_componentWillReceiveProps(next) {
    this.category(next.category)
  }

  category = category => this.setState({ category })

  search = search => this.setState({ search })

  render() {
    const openCards = this.props.alwaysOpen || this.state.search
    const borderBottom = this.state.search && !this.props.alwaysOpen

    return (
      <div
        className={css(styles.navigation, borderBottom && styles.borderBottom)}
      >
        <ToolsBar search={this.search} />

        {openCards && <PostCards {...this.state} />}
      </div>
    )
  }
}

const styles = StyleSheet.create({
  navigation: { position: 'relative' },

  borderBottom: { borderBottom: `1px solid ${colors.gray}` },
})

Navigation.propTypes = {
  categories: PropTypes.array.isRequired,
  category: PropTypes.string,
  alwaysOpen: PropTypes.bool,
  byCategory: PropTypes.bool,
}

const mapStateToProps = ({ categories }) => ({ categories })

export default connect(mapStateToProps)(Navigation)
