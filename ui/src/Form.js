import React, { Component } from 'react'
import * as http from './http'

class Form extends Component {
  state = { url: ``, description: `` }

  submit = async () => {
    await http.post(`links`, this.state)
    this.props.getLinks()
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="url"
            value={this.state.url}
            onChange={e => this.setState({ url: e.target.value })}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="description"
            value={this.state.description}
            onChange={e => this.setState({ description: e.target.value })}
          />
        </div>
        <br />
        <div><button onClick={this.submit}>submit</button></div>
      </div>
    )
  }
}

export default Form
