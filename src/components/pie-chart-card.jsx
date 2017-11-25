import React from 'react'
import { Card } from 'react-materialize';
import { PieChart, Pie, Cell } from 'recharts';
// TODO onClick in the wrong place probably

const PieChartCard = (props) => {
  return (
    <Card title={props.title} className="lighten-4 black-text">
      <PieChart width={400} height={400} onClick={props.pieClick}>
        <Pie type="monotone" data={props.data} dataKey="uv">
          {
            props.data.map((entry, index) => <Cell fill={props.colors[index]} key={index}/>)
          }
        </Pie>
      </PieChart>
    </Card>
  )
}

export default PieChartCard
