import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { StyleSheet, css } from 'aphrodite/no-important'
import injectGlobalStyles from 'aphrodite-globals/no-important'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { globals, spaces, breakpoint } from './theme'
import { storeCategories } from './actions/categories'
import ScrollToTop from './components/ScrollToTop'

// Components
import Header from './components/Header'
import Home from './components/Home'
import CreatePost from './components/CreatePost'
import Category from './components/Category'
import Post from './components/Post'
import Footer from './components/Footer'

// Add icons to Font awesome library
library.add(fas)

injectGlobalStyles(globals)

class App extends Component {
  componentWillMount() {
    // Categories is used in `Header`, `PostCardsPage` and `CreatePost`
    this.props.dispatch(storeCategories())
  }
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <div className={css(styles.general)}>
            <Header />
            <div className={css(styles.middle)}>
              <Switch>
                {/* Home */}
                <Route exact path="/" component={Home} />

                {/* Create Post */}
                <Route exact path="/create-post" component={CreatePost} />

                {/* Category */}
                <Route
                  exact
                  path="/:category"
                  render={e => (
                    <Category alwaysOpen category={e.match.params.category} />
                  )}
                />

                {/* Post */}
                <Route exact path="/:category/:post" component={Post} />

                {/* Redirect to home if Routes above don't match */}
                <Redirect to="/" />
              </Switch>
            </div>
            <Footer />
          </div>
        </ScrollToTop>
      </BrowserRouter>
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

  middle: {
    flex: 'auto',
    display: 'flex',
  },
})

export default connect(mapStateToProps)(App)
