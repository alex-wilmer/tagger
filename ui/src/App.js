import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ListPage from './ListPage'
import DetailsPage from './DetailsPage'

let App = () => (
  <Router>
    <div>
      <Route exact path="/" component={ListPage} />
      <Route path="/link/:id" component={DetailsPage} />
    </div>
  </Router>
)

export default App
