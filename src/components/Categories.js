import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions'
import { StyleSheet, css } from 'aphrodite/no-important'

class Categories extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCategories())
  }
  render() {
    const { categories } = this.props

    return (
      <ul>
        {categories && categories.map((category, key) => (
          <li className={css(styles.item)} key={key}><a href="">{category.name}</a></li>
        ))}
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

const mapStateToProps = ({categories}) => ({
  categories
})

export default connect(mapStateToProps)(Categories)
