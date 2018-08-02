import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import injectGlobalStyles from 'aphrodite-globals/no-important'
import { fetchPosts, fetchCategories } from './actions'
import Home from './components/Home'
import Category from './components/Category'
import { globals } from './theme'

injectGlobalStyles(globals)

class App extends Component {
  state = {
    initialContent: false
  }
  componentWillMount() {
    // Dispatch initial content
    this.props.dispatch(fetchPosts())
    this.props.dispatch(fetchCategories()).then(() => {
      this.setState({initialContent: true})
    })
  }
  render() {
    return (
      <Router>
        {this.state.initialContent &&
          <Switch>
            {/* Home Page */}
            <Route exact path="/" component={Home} />

            {/* Category Page */}
            {this.props.categories.map(category => (
              <Route
                path={`/${category.path}`}
                key={category.path}
                render={() => <Category category={category.name} />}
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

const mapStateToProps = ({ categories, posts }) => ({ categories, posts })

export default connect(mapStateToProps)(App);
