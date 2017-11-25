
import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { Row, Col, Container, CardPanel } from 'react-materialize';
import Navbar from './components/navbar.jsx'
import ProjectList from './components/project-list.jsx'
import ProjectDetails from './components/project-details.jsx'

import { PieChart, Pie, Cell } from 'recharts';
const COLORS = ['#F44336', '#FFC107', '#4CAF50']
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {name: 'p1'},
        {name: 'p2'},
        {name: 'p3'},
        {name: 'p4'}
      ],
      "pie_chart_data": [
        {name:"Red", uv:5 },
        {name:"Amber", uv:5},
        {name:"Green", uv:90}
        ],
      "spend":-100
    };
  }

  pieClick(info) {
    console.log("CLICK THAT PIE" + JSON.stringify(info.activePayload[0].payload.name));
  }

  formatMoney(val) {
    return "£"+Math.abs(val);
  }

  get_overspend() {
    return this.state.spend > 0 ? <div className="overspend">{this.formatMoney(this.state.spend)}</div> : <div className="underspend">{"-" + this.formatMoney(this.state.spend)}</div>;
  }

  render() {
        return (
          <div>
            <Navbar title="Overview" />
            <Row>
              <Col s={12} m={4}>
                <CardPanel className="teal lighten-4 black-text">
                  <PieChart width={400} height={400} onClick={this.pieClick}>
                    <Pie type="monotone" data={this.state.pie_chart_data} dataKey="uv">
                      {
                      	this.state.pie_chart_data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} key={index}/>)
                      }
                    </Pie>
                  </PieChart>
                </CardPanel>
              </Col>
              <Col s={12} m={4}>
                <CardPanel>
                  {this.get_overspend()}
                </CardPanel>
              </Col>
            </Row>
            <ProjectList projects={this.state.projects} />
          </div>
        );
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
