import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import injectGlobalStyles from 'aphrodite-globals'
import globals from './theme/globals'
import Home from './components/Home'

injectGlobalStyles(globals)

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Home} />
      </Router>
    );
  }
}

export default App;
