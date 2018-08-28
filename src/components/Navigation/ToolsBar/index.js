import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Categories from './Categories'
import Search from './Search'

class ToolsBar extends Component {
  render() {
    return (
      <div className={css(styles.toolsBar)}>
        <Categories />
        <div className={css(styles.search)}>
          <Search {...this.props} />
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  toolsBar: { display: 'flex' },

  search: { flex: 'auto' },
})

export default ToolsBar
