import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

/**
 * This is a ⌘C / ⌘V from here:
 * https://reacttraining.com/react-router/web/guides/scroll-restoration
 */
class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

ScrollToTop.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
}

export default withRouter(ScrollToTop)
