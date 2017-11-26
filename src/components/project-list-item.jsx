import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class ProjectListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      project: props.project,
      link: `/project/${props.project.name}`,
      className: `clickable ${props.project.positive ? '' : 'bg-error'}`,
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
      <tr className={this.state.className} onClick={this.onClick.bind(this)}>
        <th>{this.state.project.name}</th>
        <td>{this.state.project.spendings}</td>
        <td>{this.state.project.budget}</td>
        <td>{this.state.project.positive ? 'OK' : 'Attention Required'}</td>
      </tr>
    )
  }
}

export default ProjectListItem
