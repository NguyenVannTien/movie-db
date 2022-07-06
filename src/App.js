import React from 'react'
import { Route, Switch} from 'react-router-dom'

import Home from './Home'
import SingleMovie from './SingleMovie'

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/movies/:id' exact component={SingleMovie} />
    </Switch>
  )
}

export default App
