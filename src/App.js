import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import injectGlobalStyles from 'aphrodite-globals/no-important'
import { fetchPosts } from './actions/posts'
import { fetchCategories } from './actions/categories'
import Home from './components/Home'
import Category from './components/Category'
import Post from './components/Post'
import { globals } from './theme'
import slugify from './utils/slugify'

injectGlobalStyles(globals)

class App extends Component {
  state = { initialContent: false }

  componentWillMount() {
    // Dispatch initial content
    // TODO: check if both was received before trigger render
    this.props.dispatch(fetchPosts())
    this.props.dispatch(fetchCategories()).then(() => {
      this.setState({initialContent: true})
    })
  }
  render() {
    const { categories, posts } = this.props

    return (
      <Router>
        {this.state.initialContent &&
          <Switch>
            {/* Home Page */}
            <Route exact path="/" component={Home} />

            {/* Category Page */}
            {categories.map(category => (
              <Route
                exact
                path={`/${category.path}`}
                key={category.path}
                render={() => <Category name={category.name} path={category.path} />}
              />
            ))}

            {/* Post page */}
            {posts.map(post => (
              <Route
                path={`/${post.category}/${slugify(post.title)}`}
                key={post.id}
                render={() => <Post post={post} />}
              />
            ))}

            {/* Redirect to home if Routes above don't match */}
            <Redirect to="/" />
          </Switch>
        }
      </Router>
    );
  }
}

App.propTypes = {
  categories: PropTypes.array,
  posts: PropTypes.array,
}

const mapStateToProps = ({ categories, posts }) => ({ categories, posts })

export default connect(mapStateToProps)(App);
