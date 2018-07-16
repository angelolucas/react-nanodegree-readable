import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

class Categories extends Component {
  render() {
    return (
      <ul>
        <li className={css(styles.item)}><a href="">World</a></li>
        <li className={css(styles.item)}><a href="">Sport</a></li>
        <li className={css(styles.item)}><a href="">Politic</a></li>
        <li className={css(styles.item)}><a href="">Business</a></li>
        <li className={css(styles.item)}><a href="">Tech</a></li>
        <li className={css(styles.item)}><a href="">Science</a></li>
      </ul>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    display: 'inline-block',
    padding: 10,
  }
})

export default Categories
