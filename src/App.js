import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import injectGlobalStyles from 'aphrodite-globals'
import globals from './theme/globals'
import Home from './components/Home'
import Page404 from './components/404'

injectGlobalStyles(globals)

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={Page404} />
        </Switch>
      </Router>
    );
  }
}

export default App;
