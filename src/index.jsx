import React, { Component } from 'react';
import { render } from 'react-dom';
import { Navbar, NavItem } from 'react-materialize';

class Home extends Component {
    render(){
        return (
          <div>
            <Navbar className="bg-blue">ThORR - Overview</Navbar>
            <div>
              <p>Test Paragraph</p>
            </div>
          </div>
        );
    }
}

render(<Home />, document.getElementById('container'));
