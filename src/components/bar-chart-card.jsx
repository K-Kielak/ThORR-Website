import React from 'react'
import { Card } from 'react-materialize'
import { ResponsiveContainer, CartesianGrid,
  XAxis, YAxis, Legend, BarChart, Bar, Tooltip } from 'recharts';

const BarChartCard = (props) => {
  return (
    <Card title={props.title} className="lighten-4 black-text">
      <ResponsiveContainer maxHeight={300} maxWidth={300}>
        <BarChart data={props.data}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <Tooltip/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Legend />
          <Bar dataKey={props.dataKey1} fill={props.colors[0]} />
          <Bar dataKey={props.dataKey2} fill={props.colors[1]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}

export default BarChartCard
