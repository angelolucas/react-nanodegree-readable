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
import { globals, spaces, breakpoint } from './theme'
import { getCategories } from './actions/categories'

// Components
import Home from './components/Home'
import Category from './components/Category'
import Post from './components/Post'
import CreatePost from './components/CreatePost'
import Header from './components/Header'
import Footer from './components/Footer'

injectGlobalStyles(globals)

class App extends Component {
  UNSAFE_componentWillMount() {
    // Categories is used in `Header` and `CreatePost`
    this.props.dispatch(getCategories())
  }
  render() {
    return (
      <Router>
        <div className={css(styles.general)}>
          <Header />
          <Switch>
            {/* Home page */}
            <Route exact path="/" component={Home} />

            {/* Create Post page*/}
            <Route exact path="/create-post" component={CreatePost} />

            {/* Category page */}
            <Route exact path="/:category" component={Category} />

            {/* Post page */}
            <Route exact path="/:category/:post" component={Post} />

            {/* Redirect to home if Routes above don't match */}
            <Redirect to="/" />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

App.propTypes = { dispatch: PropTypes.func }

const mapStateToProps = ({ categories }) => ({ categories })

const styles = StyleSheet.create({
  general: {
    padding: spaces.x2,

    [breakpoint.small]: { padding: spaces.x1 },
  },
})

export default connect(mapStateToProps)(App)
