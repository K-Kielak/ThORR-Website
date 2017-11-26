import React from 'react'
import { Card } from 'react-materialize';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
// TODO onClick in the wrong place probably

const PieChartCard = (props) => {
  return (
    <Card title={props.title} className="lighten-4 black-text">
      <ResponsiveContainer maxHeight={200} maxWidth={200}>
        <PieChart width={300} height={300} onClick={props.pieClick}>
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
