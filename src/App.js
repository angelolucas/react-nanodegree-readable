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
import Navigation from './components/Navigation'
import Post from './components/Post'
import CreatePost from './components/CreatePost'
import Header from './components/Header'
import Footer from './components/Footer'

// Add icons to Font awesome library
library.add(fas)

injectGlobalStyles(globals)

class App extends Component {
  UNSAFE_componentWillMount() {
    // Categories is used in `Header`, `PostCardsPage` and `CreatePost`
    this.props.dispatch(storeCategories())
  }
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className={css(styles.general)}>
            <Header />
            <div className={css(styles.middle)}>
              <Switch>
                {/* Home page */}
                <Route
                  exact
                  path="/"
                  render={() => <Navigation alwaysOpen />}
                />

                {/* Create Post page */}
                <Route exact path="/create-post" component={CreatePost} />

                {/* Category page */}
                <Route
                  exact
                  path="/:category"
                  render={e => (
                    <Navigation alwaysOpen category={e.match.params.category} />
                  )}
                />

                {/* Post page */}
                <Route exact path="/:category/:post" component={Post} />

                {/* Redirect to home if Routes above don't match */}
                <Redirect to="/" />
              </Switch>
            </div>
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
    padding: spaces.x2,

    [breakpoint.small]: { padding: spaces.x1 },
  },

  middle: { flex: 'auto' },
})

export default connect(mapStateToProps)(App)
