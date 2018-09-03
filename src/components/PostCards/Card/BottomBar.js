import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite/no-important'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { colors } from '../../../theme'
import { deletePost } from '../../../actions/posts'
import VoteScore from '../../VoteScore'

class BottomBar extends Component {
  render() {
    const {
      id,
      category,
      commentCount,
      voteScore,
      dispatch,
      className,
    } = this.props
    const classFromProps = className ? className : ''

    return (
      <ul className={`${css(styles.bottomBar)} ${classFromProps}`}>
        <li className={css(styles.item)}>
          <Icon icon="comment-alt" />
          <strong className={css(styles.commentCount)}>{commentCount}</strong>
        </li>
        <li className={css(styles.item)}>
          <VoteScore id={id} contentType="post" score={voteScore} />
        </li>
        <li className={css(styles.item)}>
          <Link
            to={{
              pathname: `/${category}/${id}`,
              state: { editMode: true },
            }}
            title="Edit"
            className={css(styles.tool)}
          >
            <Icon icon="pencil-alt" />
          </Link>
          <button
            type="button"
            onClick={() => dispatch(deletePost(id))}
            title="Delete"
            className={css(styles.tool)}
          >
            <Icon icon="trash" />
          </button>
        </li>
      </ul>
    )
  }
}

BottomBar.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  category: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired,
  voteScore: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  bottomBar: {
    display: 'flex',
    justifyContent: 'space-between',
    listStyle: 'none',
    fontSize: 14,
    color: colors.gray,
    padding: 0,
    paddingTop: 5,
  },

  item: {
    flex: 1,
    textAlign: 'center',

    ':first-child': { textAlign: 'left' },
    ':last-child': { textAlign: 'right' },
  },

  commentCount: { marginLeft: 5 },

  tool: {
    color: colors.gray,
    fontSize: 14,
    padding: 3,
    paddingLeft: 10,

    ':hover': { color: colors.details },
  },
})

export default connect()(BottomBar)
