import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class ProjectListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      project: props.project,
      link: `/project/${props.project.name}`,
      redirect: false
    }
  }

  onClick() {
    this.setState({ redirect: true })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to={this.state.link} />;
    }

    return (
      <tr className="clickable" onClick={this.onClick.bind(this)}>
        <th>{this.state.project.name}</th>
        <td>{this.state.project.spendings}</td>
        <td>{this.state.project.budget}</td>
        <td>{this.state.project.rating}</td>
      </tr>
    )
  }
}

export default ProjectListItem
