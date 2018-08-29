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
    this.handleCategory(this.props.category)
  }

  UNSAFE_componentWillReceiveProps(next) {
    this.handleCategory(next.category)
  }

  handleCategory = category => this.setState({ category })

  handleSearch = search => this.setState({ search })

  // Clear search on onBlur
  handleBlur = e => {
    const targetInside = e.relatedTarget
    const targetOutside = !e.currentTarget.contains(targetInside)
    const targetInsideisLink = targetInside && targetInside.tagName === 'A'

    /**
     * About targetInsideisLink:
     * When the search is done inside the post page, after click on search item,
     * naturally the navigation doesn't collapse because the router still is
     * post and the page only rerender instead of unMount/mount.
     */
    if (targetOutside || targetInsideisLink) this.handleSearch('')

    // This hacky is necessary because navigation lose focus before clicking
    if (targetInsideisLink) targetInside.click()
  }

  render() {
    const expand = this.props.alwaysOpen || this.state.search
    const borderBottom = this.state.search && !this.props.alwaysOpen

    return (
      <div
        className={css(styles.navigation, borderBottom && styles.borderBottom)}
        onBlur={this.handleBlur}
        tabIndex="-1"
      >
        <ToolsBar handleSearch={this.handleSearch} search={this.state.search} />

        {expand && <PostCards {...this.state} />}
      </div>
    )
  }
}

const styles = StyleSheet.create({
  navigation: {
    position: 'relative',
    outline: 'none',
  },

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
