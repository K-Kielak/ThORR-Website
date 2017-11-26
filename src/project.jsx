import React, { Component } from 'react';
import { render } from 'react-dom';
import { Navbar, NavItem, Row, Col, Container, CardPanel, Card } from 'react-materialize';

import { LineChart, Line, Cell, CartesianGrid, XAxis, YAxis,Tooltip, Legend } from 'recharts';
const COLORS = ['#F44336', '#FFC107', '#4CAF50']
class Project extends Component {
  constructor(props){
    super(props);
    this.state = {
      "line_1": JSON.parse(fetch('http://localhost:8080/project/line/Project%201'))
      "spend":15000
    };
    console.log(this.state.line_1)
  }

  render(){
        return (
          <div>
            <Navbar className="bg-blue">ThORR - Overview</Navbar>
              <Row>
                <Col s={12} m={6}>
                  <CardPanel className="black-text">
                    <LineChart width={400} height={400}  data={this.state.line_1}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="uv" />
                      <Line type="monotone" dataKey="pv" />
                    </LineChart>
                  </CardPanel>
                </Col>
                <Col s={12} m={4}>
                </Col>
            </Row>
          </div>
        );
    }
}

render(<Project />, document.getElementById('container'));
