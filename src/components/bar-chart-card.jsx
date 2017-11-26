import React from 'react'
import { Card } from 'react-materialize'
import { ResponsiveContainer, CartesianGrid,
  XAxis, YAxis, Legend, BarChart, Bar } from 'recharts';

const BarChartCard = (props) => {
  return (
    <Card title={props.title}>
      <ResponsiveContainer maxHeight={200} maxWidth={200}>
        <BarChart data={props.data}>
          <XAxis dataKey={props.axisKey}/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Legend />
          <Bar dataKey={props.dataKey1} fill="#8884d8" />
          <Bar dataKey={props.dataKey2} fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}

export default BarChartCard
