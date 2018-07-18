import React, { Component } from 'react'
import injectGlobalStyles from 'aphrodite-globals'
import globals from './theme/globals'
import Home from './components/Home'
import * as API from './API'

injectGlobalStyles(globals)

class App extends Component {
  render() {
    API.getPosts().then((post) => {
      console.log(post)
    })
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
