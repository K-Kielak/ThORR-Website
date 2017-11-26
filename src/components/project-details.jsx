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
  load_data(){
    fetch('http://localhost:8080/project/line/Project%201').then(function(response){
      return response.json();
    }).then(function(data){
      console.log(data.data)
      return data.data
    });
  }
  constructor(props) {
    super(props)
    this.state = {
      project: {
        name: props.match.params.name // TODO replace with API call
      },
      "line_1": [],
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
    console.log("Loaded")
    console.log(this.state)
  }

  componentDidMount()
  {
    var oldState = this.state;
    (fetch('http://localhost:8080/project/line/Project%201').then((response) => {
      return response.json()
    }).then( (data) => {
      oldState.line_1 = data.data
      this.setState(oldState);
    }));
    console.log(this.state);
  }

  render() {
    return (
      <div>
      <Navbar title={`${this.state.project.name} details`} />
      <Row>
        <Col s={12} m={4}>
          <Card title="Line Graph">
            <ResponsiveContainer maxHeight={200} maxWidth={200}>
              <LineChart  data={this.state.line_1}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="CP5 Y1" />
                <Line type="monotone" dataKey="CP5 Y2" />
                <Line type="monotone" dataKey="CP5 Y3" />
                <Line type="monotone" dataKey="CP5 Y4" />
                <Line type="monotone" dataKey="CP5 Y5" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col s={12} m={4}>
          <Card title="BarChart">
            <ResponsiveContainer maxHeight={200} maxWidth={200}>
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
