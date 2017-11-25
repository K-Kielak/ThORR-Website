import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from './components/navbar.jsx'
import ProjectList from './components/project-list.jsx'
import ProjectDetails from './components/project-details.jsx'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { // TODO replace with API call
      projects: [{name: 'p1'}, {name: 'p2'}, {name: 'p3'}, {name: 'p4'}],
    }
  }

  render() {
    return (
      <div>
        <Navbar title='Overview'/>
        <ProjectList projects={this.state.projects} />
      </div>
    )
  }
}

render(
  <BrowserRouter>
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/project/:name' component={ProjectDetails} />
    </div>
  </BrowserRouter>,
  document.getElementById('container')
)
