import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as http from './http'

class DetailsPage extends Component {
  state = { link: {} }

  async componentDidMount() {
    let link = await http.get(`links/${this.props.match.params.id}`)
    link.tags = await http.get(`links/${link.id}/tags`)
    this.setState({ link })
  }

  render() {
    return (
      <div>
        <div><Link to="/">Back</Link></div>
        <hr />
        {this.state.link.id &&
          <div>
            <h2>{this.state.link.url}</h2>
            <div>{this.state.link.description}</div>
            <ul>
              {this.state.link.tags.map(tag => <li key={tag.id}>{tag.name}</li>)}
            </ul>
          </div>
        }
      </div>
    )
  }
}

export default DetailsPage
