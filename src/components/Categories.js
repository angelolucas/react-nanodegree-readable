import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
          <li className={css(styles.item)} key={key}>
            <Link to={`/${category.path}`}>{category.name}</Link>
          </li>
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