import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { spaces } from '../../theme'

class Comments extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <h3>4 Comments</h3>
        <ul>
          <li>
            <h5>thingtwo</h5>
            <p>Hi there! I am a COMMENT.</p>
            <span>6 Votes</span>
            <span>Edit</span>
            <span>Delete</span>
          </li>
          <li>
            <h5>thingtwo</h5>
            <p>Hi there! I am a COMMENT.</p>
            <span>6 Votes</span>
          </li>
        </ul>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: spaces.x2,
  },
})

export default Comments
