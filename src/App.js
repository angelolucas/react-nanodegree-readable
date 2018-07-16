import React, { Component } from 'react'
import injectGlobalStyles from 'aphrodite-globals'
import globals from './theme/globals'
import Home from './components/Home'

injectGlobalStyles(globals)

class App extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
