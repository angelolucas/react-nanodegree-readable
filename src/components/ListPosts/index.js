import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { connect } from 'react-redux'
import { fetchPosts } from '../../actions'

class ListPosts extends Component {
  componentDidMount = () => {
    this.props.dispatch(fetchPosts())
  }
  render() {
    return (
      <div>
        <ul className={css(styles.list)}>
          { this.props.posts &&
            this.props.posts.map((post, key) => (
            <li className={css(styles.post)} key={key}>
              <h2>{post.title}</h2>
              <p>{post.category}</p>
              <p>By {post.author}</p>
              <p>{post.body}</p>
              <ul className={css(styles.utils)}>
                <li className={css(styles.utilsItem)}>{post.commentCount} Comments</li>
                <li className={css(styles.utilsItem)}>{post.voteScore} votes</li>
                <li className={css(styles.utilsItem)}>edit</li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  list: {
    columnCount: 3,
  },

  utils: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  post: {
    padding: 20,
    display: 'inline-block',
  }
})

const mapStateToProps = ({ posts }) => ({
  posts
})

export default connect(mapStateToProps)(ListPosts)
