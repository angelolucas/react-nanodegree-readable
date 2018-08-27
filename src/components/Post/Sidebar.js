import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import { spaces } from '../../theme'
import PostCards from '../PostCards'

class Sidebar extends Component {
  render() {
    const { category, id } = this.props

    return (
      <div className={css(styles.sidebar)}>
        <PostCards
          category={category}
          exceptId={id}
          maxLength={3}
          justMainInfo
        />
      </div>
    )
  }
}

Sidebar.propTypes = {
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  sidebar: {
    position: 'sticky',
    top: spaces.x2,
  },
})

export default Sidebar
