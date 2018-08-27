import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { connect } from 'react-redux'
import { StyleSheet, css } from 'aphrodite/no-important'
import injectGlobalStyles from 'aphrodite-globals/no-important'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { globals, spaces, breakpoint } from './theme'
import { storeCategories } from './actions/categories'
import ScrollToTop from './components/ScrollToTop'

// Components
import PostCards from './components/PostCards'
import CategoryPage from './components/CategoryPage'
import Post from './components/Post'
import CreatePost from './components/CreatePost'
import Header from './components/Header'
import Footer from './components/Footer'

// Add icons to Font awesome library
library.add(fas)

injectGlobalStyles(globals)

class App extends Component {
  UNSAFE_componentWillMount() {
    // Categories is used in `Header`, `CategoryPage` and `CreatePost`
    this.props.dispatch(storeCategories())
  }
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className={css(styles.general)}>
            <Header />
            <Switch>
              {/* Home page */}
              <Route exact path="/" component={PostCards} />

              {/* Create Post page */}
              <Route exact path="/create-post" component={CreatePost} />

              {/* Category page */}
              <Route exact path="/:category" component={CategoryPage} />

              {/* Post page */}
              <Route exact path="/:category/:post" component={Post} />

              {/* Redirect to home if Routes above don't match */}
              <Redirect to="/" />
            </Switch>
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    )
  }
}

App.propTypes = { dispatch: PropTypes.func.isRequired }

const mapStateToProps = ({ categories }) => ({ categories })

const styles = StyleSheet.create({
  general: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    justifyContent: 'space-between',
    padding: spaces.x2,

    [breakpoint.small]: { padding: spaces.x1 },
  },
})

export default connect(mapStateToProps)(App)
