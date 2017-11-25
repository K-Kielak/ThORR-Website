import React, { Component } from 'react'
import { render } from 'react-dom'

import Navbar from './components/navbar.jsx'
import ProjectList from './components/project-list.jsx'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { // TODO replace with API call
      projects: [{name: 'p1'}, {name: 'p2'}, {name: 'p3'}, {name: 'p4'}]
    }
  }

  render() {
      return (
        <div>
          <Navbar title='Overview'/>
          <div>
            <ProjectList projects={this.state.projects}/>
          </div>
        </div>
      )
  }
}

render(<Home />, document.getElementById('container'))
