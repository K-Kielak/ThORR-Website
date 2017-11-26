import React, { Component } from 'react'

import { Row, Col, Container, Card } from 'react-materialize';
import {
  LineChart, Line,
  CartesianGrid, XAxis, YAxis,
  Tooltip, Legend,
  BarChart, Bar, ErrorBar,
  ResponsiveContainer
} from 'recharts';

import Navbar from './navbar.jsx'

class ProjectDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      project: {
        name: props.match.params.name // TODO replace with API call
      },
      "line_1": [  //TODO Replace with API call
        { name:"Mar", uv:10, pv:21},
        { name:"Apr", uv:12, pv:19 },
        { name:"May", uv:16, pv:26 },
        { name:"Jun", uv:30, pv:45 },
        { name:"Jul", uv:90, pv:30 },
        { name:"Aug", uv:60, pv:23 },
        { name:"Sep", uv:10, pv:17 }
      ],
      "bar_data": [  //TODO Replace with API call
        { name:"Mar", uv:10, pv:21, errorY:[2,7]},
        { name:"Apr", uv:12, pv:19, errorY:6 },
        { name:"May", uv:16, pv:26, errorY:3 },
        { name:"Jun", uv:30, pv:45, errorY:2 },
        { name:"Jul", uv:90, pv:30, errorY:8 },
        { name:"Aug", uv:60, pv:23, errorY:[1,7] },
        { name:"Sep", uv:10, pv:17, errorY:3 }
        ]
    }
  }

  render() {
    return (
      <div>
      <Navbar title={this.state.project.name} />
      <Row>
        <Col s={12} m={4}>
          <Card title="Line Graph">
            <ResponsiveContainer width='100%' height='100%'>
              <LineChart  data={this.state.line_1}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="uv" />
                <Line type="monotone" dataKey="pv" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col s={12} m={4}>
          <Card title="BarChart">
            <ResponsiveContainer width='100%' height='100%' max-height='400px'>
              <BarChart data={this.state.bar_data}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Legend />
                <Bar dataKey="pv" fill="#8884d8">
                  <ErrorBar dataKey="errorY" width={3} strokeWidth={1} stroke="black" direction="y" />
                </Bar>
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
      </div>
    )
  }
}

export default ProjectDetails
