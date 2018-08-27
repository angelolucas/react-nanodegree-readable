import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { spaces } from '../../../theme'
import Header from './Header'
import View from './View'
import Edit from './Edit'

class Comment extends Component {
  state = { editMode: false }

  switchEditMode = (bool = true) => {
    if (bool) {
      this.setState({ editMode: true })
    } else {
      this.setState({ editMode: false })
    }
  }

  render() {
    const { editMode } = this.state

    return (
      <div className={css(styles.comment)}>
        <Header {...this.props} />

        {editMode ? (
          <Edit {...this.props} switchEditMode={this.switchEditMode} />
        ) : (
          <View {...this.props} switchEditMode={this.switchEditMode} />
        )}
      </div>
    )
  }
}

const styles = StyleSheet.create({
  comment: {
    borderBottom: '1px solid',
    marginBottom: spaces.x2,
    paddingBottom: spaces.x2,
  },
})

export default Comment
