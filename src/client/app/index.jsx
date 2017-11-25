import React, { Component } from 'react';
import { render } from 'react-dom';
import { Navbar, NavItem } from 'react-materialize';

class Home extends Component {
    render(){
        return (
          <body>
            <Navbar>Test</Navbar>
            <container>
              <p>Test Paragraph</p>
            </container>
          </body>
        );
    }
}

render(<Home />, document.getElementById('container'));
