import React, { Component } from 'react'
import View from './View'
import Edit from './Edit'

class Content extends Component {
  state = { editMode: false }

  editMode = (boleaon = true) => {
    if (boleaon) {
      this.setState({ editMode: true })
    } else {
      this.setState({ editMode: false })
    }
  }

  render() {
    const { editMode } = this.state

    return (
      <main>
        {editMode ? (
          <Edit {...this.props} editMode={this.editMode} />
        ) : (
          <View {...this.props} editMode={this.editMode} />
        )}
      </main>
    )
  }
}

export default Content
