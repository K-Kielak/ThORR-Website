import React, { Component } from 'react'

import Navbar from './navbar.jsx'

class ProjectDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      project: {
        name: props.match.params.name // TODO replace with API call
      }
    }
  }

  render() {
    return (
      <Navbar title={this.state.project.name} />
    )
  }
}

export default ProjectDetails
