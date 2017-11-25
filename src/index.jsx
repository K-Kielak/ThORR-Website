import React, { Component } from 'react';
import { render } from 'react-dom';
import Navbar from './components/navbar.jsx'

class Home extends Component {
    render(){
        return (
          <div>
            <Navbar title='Overview'/>
            <div>
              <p>Test Paragraph</p>
            </div>
          </div>
        );
    }
}

render(<Home />, document.getElementById('container'));
