import React, { Component } from 'react'

import { Row, Col, Container, Card } from 'react-materialize';
import {
  LineChart, Line,
  CartesianGrid, XAxis, YAxis,
  Tooltip, Legend,
  BarChart, Bar, ErrorBar,
  ResponsiveContainer,
  Cell
} from 'recharts';

import Navbar from './navbar.jsx'

const COLORS = ['red', 'green', 'yellow', 'purple'];

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
      "line_1_error": [],
      "bar_data": []
    }
    console.log("Loaded")
    console.log(this.state)
  }

  componentDidMount()
  {
    var oldState = this.state;
    (fetch('http://localhost:8080/project/line/'+ this.state.project.name).then((response) => {
      return response.json()
    }).then( (data) => {
      let sortedData = data.data.sort((a, b) => { return a.x > b.x })
      oldState.line_1 = sortedData
      this.setState(oldState);
    }));
    (fetch('http://localhost:8080/project/line-error/' + this.state.project.name).then((response) => {
      return response.json()
    }).then( (data) => {
      let sortedData = data.data.sort((a, b) => { return a.x > b.x })
      oldState.line_1_error = sortedData
      this.setState(oldState);
    }));
    (fetch('http://localhost:8080/project/bar/' + this.state.project.name).then((response) => {
      return response.json()
    }).then( (data) => {
      oldState.bar_data = data.data
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
          <Card title="Change in Reporting per Period">
            <ResponsiveContainer maxHeight={200} maxWidth={200}>
              <LineChart  data={this.state.line_1}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="CP5 Y1" stroke="red"/>
                <Line type="monotone" dataKey="CP5 Y2" stroke="green"/>
                <Line type="monotone" dataKey="CP5 Y3" stroke="yellow"/>
                <Line type="monotone" dataKey="CP5 Y4" stroke="purple"/>
                <Line type="monotone" dataKey="CP5 Y5" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col s={12} m={4}>
          <Card title="Deviation from Baseline">
            <ResponsiveContainer maxHeight={200} maxWidth={200}>
              <LineChart  data={this.state.line_1_error}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="CP5 Y1" stroke="red"/>
                <Line type="monotone" dataKey="CP5 Y2" stroke="green"/>
                <Line type="monotone" dataKey="CP5 Y3" stroke="yellow"/>
                <Line type="monotone" dataKey="CP5 Y4" stroke="purple"/>
                <Line type="monotone" dataKey="CP5 Y5" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col s={12} m={4}>
          <Card title="Summary of Variability">
            <ResponsiveContainer maxHeight={200} maxWidth={200}>
              <BarChart data={this.state.bar_data}>
                <XAxis dataKey="x"/>
                <YAxis/>
                <Tooltip />
                <CartesianGrid strokeDasharray="3 3"/>
                <Legend />
                <Bar dataKey="value" fill="#8884d8">
                  <ErrorBar dataKey="sd" width={3} strokeWidth={1} stroke="black" direction="y" />
                    {
                      this.state.bar_data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)}
                </Bar>
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
