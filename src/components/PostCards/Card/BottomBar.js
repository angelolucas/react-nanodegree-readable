import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { colors } from '../../../theme'
import { deletePost } from '../../../actions/posts'
import VoteScore from '../../VoteScore'
import { ShowTools, Tool } from '../../ShowTools'

class BottomBar extends Component {
  render() {
    const { id, category, commentCount, voteScore, deletePost } = this.props

    return (
      <ul className={css(styles.bottomBar)}>
        <li className={css(styles.item)}>
          <Icon icon="comment-alt" />
          <strong className={css(styles.commentCount)}>{commentCount}</strong>
        </li>
        <li className={css(styles.item)}>
          <VoteScore id={id} contentType="post" score={voteScore} />
        </li>
        <li className={css(styles.item)}>
          <ShowTools icon="ellipsis-v">
            <Tool
              type="button"
              onClick={() => deletePost(id)}
              title="Trash"
              icon="trash"
            />
            <Tool
              type="link"
              to={{
                pathname: `/${category}/${id}`,
                state: { editMode: true },
              }}
              icon="pencil-alt"
              title="Edit"
            />
          </ShowTools>
        </li>
      </ul>
    )
  }
}

BottomBar.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired,
  voteScore: PropTypes.number.isRequired,
  deletePost: PropTypes.number.isRequired,
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
})

const mapDispatchToProps = dispatch => {
  return { deletePost: id => dispatch(deletePost(id)) }
}

export default connect(
  null,
  mapDispatchToProps
)(BottomBar)
