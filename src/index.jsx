
import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { Row, Col } from 'react-materialize';
import Navbar from './components/navbar.jsx'
import ProjectList from './components/project-list.jsx'
import ProjectDetails from './components/project-details.jsx'
import ChartsDashboard from './components/charts-dashboard.jsx'

const COLORS = ['#F44336', '#FFC107', '#4CAF50']

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {name: 'p1', spendings: 1000, budget: 1000, rating: 1},
        {name: 'p2', spendings: 1000, budget: 1000, rating: 1},
        {name: 'p3', spendings: 1000, budget: 1000, rating: 1},
        {name: 'p4', spendings: 1000, budget: 1000, rating: 1}
      ],
      visitData:[
        {name:"Visit", uv:10},
        {name:"Don't visit", uv:90},
      ],
      ragData: [
        {name:"Red", uv:20 },
        {name:"Amber", uv:5},
        {name:"Green", uv:90}
        ],
      spend: this.getOverspend(15000),
      pieClick: this.pieClick.bind(this)
    };
  }

  pieClick(info){
    console.log("CLICK THAT PIE" + JSON.stringify(info.tooltipPayload[0].name));
  }

  formatMoney(val){
    var number = Math.abs(val)
    var digits = Math.log(number) * Math.LOG10E + 1 | 0;
    var formattedNumber = number;
    switch (digits) {
      case 0:
      case 1:
      case 2:
      case 3:
        console.log(digits + " is either 0,1,2,3");
        formattedNumber = number;
        break;
      case 4:
      case 5:
      case 6:
        console.log(digits + " is either 4,5,6");
        formattedNumber = Math.round(number/1000)
        formattedNumber += "k"
        break;
      case 7:
      case 8:
      case 9:
        console.log(digits + " is either 7,8,9,10,11,12");
        formattedNumber = Math.round(number/100000)/10
        formattedNumber += "m"
        break;

      default:
        console.log(digits + " is bigger than 12");
        formattedNumber = Math.round(number/100000000)/10
        formattedNumber += "bn"
        break;
    }
    return "£"+ formattedNumber;
  }

  getOverspend(spend){
    return spend > 0 ? <div className="overspend"><h2>{this.formatMoney(spend)}</h2></div> : <div className="underspend"><h2>{"-" + this.formatMoney(spend)}</h2></div>;
  }

  render() {
    return (
      <div>
        <Navbar title="Overview" />
        <Row>
          <Col s={12} m={4}>
            <ProjectList
              projects={this.state.projects} />
          </Col>
          <Col s={12} m={8} >
            <ChartsDashboard
              pieClick={this.state.pieClick}
              pieColors={COLORS}
              ragTitle="Projected RAG"
              ragData={this.state.ragData}
              spendingBudgetTitle="Underspend/Overspend"
              spendingBudgetValue={this.state.spend}
              visitsPredictionTitle="Sites to visit"
              visitsPredictionData={this.state.visitData} />
          </Col>
        </Row>
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
