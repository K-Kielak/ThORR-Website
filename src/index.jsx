import React, { Component } from 'react';
import { render } from 'react-dom';
import { Navbar, NavItem, Row, Col, Container, CardPanel } from 'react-materialize';

import { PieChart, Pie, Cell } from 'recharts';
const COLORS = ['#F44336', '#FFC107', '#4CAF50']
class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      "pie_chart_data": [
        {name:"Red", uv:5 },
        {name:"Amber", uv:5},
        {name:"Green", uv:90}
        ],
      "spend":-100
    };
  }

  pieClick(info){
    console.log("CLICK THAT PIE" + JSON.stringify(info.activePayload[0].payload.name));
  }

  formatMoney(val){
    return "£"+Math.abs(val);
  }
  get_overspend(){
    return this.state.spend > 0 ? <div className="overspend">{this.formatMoney(this.state.spend)}</div> : <div className="underspend">{"-" + this.formatMoney(this.state.spend)}</div>;
  }
  render(){
        return (
          <div>
            <Navbar className="bg-blue">Test</Navbar>
              <Row>
                <Col s={12} m={4}>
                  <CardPanel className="teal lighten-4 black-text">
                    <PieChart width={400} height={400} onClick={this.pieClick}>
                      <Pie type="monotone" data={this.state.pie_chart_data} dataKey="uv">
                        {
                        	this.state.pie_chart_data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                        }
                      </Pie>
                    </PieChart>
                  </CardPanel>
                </Col>
                <Col s={12} m={4}>
                  <CardPanel>
                    <h1>Budget</h1>
                  </CardPanel>
                  <CardPanel>
                    {this.get_overspend()}
                  </CardPanel>
                </Col>
            </Row>
          </div>
        );
    }
}

render(<Home />, document.getElementById('container'));
