import React from 'react'
import { Row, Col, Card } from 'react-materialize';
import PieChartCard from './pie-chart-card.jsx'
import BarChartCard from './bar-chart-card.jsx'

const ChartsDashboard = (props) => {
  return (
    <Row>
      <Col s={12} m={6}>
        <BarChartCard
          title={props.spendingBudgedTitle}
          data={props.spendingBudgetData}
          axisKey={props.spendingBudetXAxis}
          dataKey1='spend'
          dataKey2='budget' />
      </Col>
      <Col s={12} m={6}>
        <PieChartCard
          pieClick={props.pieClick}
          colors={props.colors}
          title={props.visitsPredictionTitle}
          data={props.visitsPredictionData} />
      </Col>
    </Row>
  )
}

export default ChartsDashboard
