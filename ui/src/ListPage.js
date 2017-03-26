import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as http from './http'
import Form from './Form'

class ListPage extends Component {
  state = { links: [] }

  componentDidMount() {
    this.getLinks()
  }

  getLinks = async () => {
    this.setState({ links: [] })

    let links = await http.get(`links`)

    links.forEach(async link => {
      link.tags = await http.get(`links/${link.id}/tags`)
      this.setState({ links: [...this.state.links, link] })
    })
  }

  render() {
    return (
      <div>
        <Form getLinks={this.getLinks} />

        <hr />

        {this.state.links.map(link =>
          <div key={link.id}>
            <div><Link to={`link/${link.id}`}>{link.url}</Link></div>
            <ul>
              {link.tags.map(tag => <li key={tag.id}>{tag.name}</li>)}
            </ul>
            <hr />
          </div>
        )}
      </div>
    )
  }
}

export default ListPage
