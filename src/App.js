import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import injectGlobalStyles from 'aphrodite-globals/no-important'
import { fetchCategories } from './actions'
import Home from './components/Home'
import Category from './components/Category'
import { globals } from './theme'

injectGlobalStyles(globals)

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCategories())
  }
  render() {
    let { categories } = this.props

    return (
      <Router>
        <div>
          <Switch>
            {categories && categories.map(category => (
              <Route
                path={`/${category.path}`}
                key={category.path}
                render={() => <Category category={category.name} />}
              />
            ))}

            <Route component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ categories }) => ({ categories })

export default connect(mapStateToProps)(App);
