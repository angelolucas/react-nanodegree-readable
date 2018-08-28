import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PostCards from './PostCards'

class PostCardsPage extends Component {
  state = { category: false }

  UNSAFE_componentWillReceiveProps = next => {
    const { categories, match } = next
    const nextCategory = match.params.category

    if (nextCategory && categories) {
      const category = categories.find(
        category => category.path === nextCategory
      )

      this.setState({ category: category.path })
    } else {
      this.setState({ category: '' })
    }
  }

  render() {
    return (
      <div>
        {this.state.category !== false && <PostCards {...this.state} />}
      </div>
    )
  }
}

PostCardsPage.propTypes = {
  categories: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
}

const mapStateToProps = ({ categories }) => ({ categories })

export default connect(mapStateToProps)(PostCardsPage)
