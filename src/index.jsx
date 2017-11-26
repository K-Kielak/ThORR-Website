
import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { Row, Col } from 'react-materialize';
import Navbar from './components/navbar.jsx'
import ProjectList from './components/project-list.jsx'
import ProjectDetails from './components/project-details.jsx'
import ChartsDashboard from './components/charts-dashboard.jsx'

const COLORS = ['#F44336', '#4CAF50', '#FFC107']

const PROJECTS = [
  {name: 'Project 75', spendings: 1324, budget: 691, positive: false},
  {name: 'Project 32', spendings: 146, budget: 8, positive: false},
  {name: 'Project 82', spendings: 93, budget: 73, positive: false},
  {name: 'Project 3', spendings: 2669, budget: 2758, positive: true},
  {name: 'Project 15', spendings: 60, budget: 68, positive: true},
  {name: 'Project 65', spendings: 86, budget: 77, positive: true},
  {name: 'Project 34', spendings: 63, budget: 1, positive: true},
  {name: 'Project 78', spendings: 35, budget: 15, positive: true},
  {name: 'Project 35', spendings: 4, budget: 62, positive: true},
  {name: 'Project 44', spendings: 35, budget: 15, positive: true},
  {name: 'Project 13', spendings: 4, budget: 62, positive: true},
  {name: 'Project 14', spendings: 1, budget: 73, positive: true},
  {name: 'Project 87', spendings: 1100, budget: 1186, positive: true},
  {name: 'Project 77', spendings: 723, budget: 113, positive: true},
  {name: 'Project 63', spendings: 23, budget: 3, positive: true},
  {name: 'Project 16', spendings: 13, budget: 16, positive: true},
  {name: 'Project 17', spendings: 214, budget: 25, positive: true},
  {name: 'Project 18', spendings: 2718, budget: 577, positive: true},
  {name: 'Project 19', spendings: 13, budget: 11, positive: true},
  {name: 'Project 20', spendings: 28, budget: 58, positive: true},
  {name: 'Project 21', spendings: 167, budget: 146, positive: true},
  {name: 'Project 22', spendings: 60, budget: 2165, positive: true},
  {name: 'Project 23', spendings: 136, budget: 220, positive: true}
]

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: PROJECTS,
      visitData: [
        {name: "Requires control", uv: PROJECTS.filter(project => {return !project.positive}).length},
        {name: "OK", uv: PROJECTS.filter(project => {return project.positive}).length},
      ],
      ragData: [
        {name:"Red", uv:20 },
        {name:"Green", uv:90},
        {name:"Amber", uv:5}
      ],
      spend: PROJECTS.reduce((sum, project) => sum + project.spendings, 0),
      budget: PROJECTS.reduce((sum, project) => sum + project.budget, 0),
      pieClick: this.pieClick.bind(this)
    };

    this.set
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
        <div className="content">
          <Row>
            <Col s={12} m={4}>
              <ProjectList
                projects={this.state.projects} />
            </Col>
            <Col s={12} m={8} >
              <ChartsDashboard
                pieClick={this.state.pieClick}
                colors={COLORS}
                spendingBudgetTitle='Expenses vs Budget'
                spendingBudgetData={[{'name': 'expenses vs budget', 'expenses': this.state.spend, 'budget': this.state.budget}]}
                spendingBudgetXAxis='expenses vs budget'
                spendingBudgetKey1="expenses"
                spendingBudgetKey2="budget"
                visitsPredictionTitle="Classification"
                visitsPredictionData={this.state.visitData} />
            </Col>
          </Row>
        </div>
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
