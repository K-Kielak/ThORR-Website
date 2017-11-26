import React from 'react'
import { Card } from 'react-materialize';
import { ResponsiveContainer, PieChart,
  Pie, Cell, Legend, Tooltip } from 'recharts';
// TODO onClick in the wrong place probably

const PieChartCard = (props) => {
  return (
    <Card title={props.title} className="lighten-4 black-text">
      <ResponsiveContainer maxHeight={300} maxWidth={300}>
        <PieChart width={300} height={300} onClick={props.pieClick}>
          <Tooltip />
          <Legend />
          <Pie type="monotone" data={props.data} dataKey="uv">
            {
              props.data.map((entry, index) => <Cell fill={props.colors[index]} key={index}/>)
            }
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </Card>
  )
}

export default PieChartCard
