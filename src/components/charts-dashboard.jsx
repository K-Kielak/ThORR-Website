import React from 'react'
import { Row, Col, Card } from 'react-materialize';
import PieChartCard from './pie-chart-card.jsx'

const ChartsDashboard = (props) => {
  return (
    <Row>
      <Col s={12} m={4}>
        <PieChartCard
          pieClick={props.pieClick}
          colors={props.pieColors}
          title={props.ragTitle}
          data={props.ragData} />
      </Col>
      <Col s={12} m={4}>
        <Card title={props.spendingBudgetTitle}>
          {props.spendingBudgetValue}
        </Card>
      </Col>
      <Col s={12} m={4}>
        <PieChartCard
          pieClick={props.pieClick}
          colors={props.pieColors}
          title={props.visitsPredictionTitle}
          data={props.visitsPredictionData} />
      </Col>
    </Row>
  )
}

export default ChartsDashboard
