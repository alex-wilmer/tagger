import React, { Component } from 'react'
import * as http from './http'

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

class Home extends Component {
  state = {
    links: [],
    tags: [],
  }

  async componentDidMount() {
    let links = await http.get(`links`)
    this.setState({ links })
  }

  render() {
    return (
      <div>
        {this.state.links.map(link =>
          <div key={link.id}>
            <div><Link to={`links/${link.id}`}>{link.url}</Link></div>
            <div>{link.description}</div>
            <hr />
          </div>
        )}
      </div>
    )
  }
}

let App = () => (
  <Router>
    <Route exact path="/" component={Home} />
  </Router>
)

export default App
