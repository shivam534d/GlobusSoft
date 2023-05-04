import React, { Component } from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: 'Jan',
    data: 1000,
  },
  {
    name: 'Feb',
    data: 800,
  },
  {
    name: 'March',
    data: 2500,
  },
  {
    name: 'Apr',
    data: 1800,
  },
];

export default class Chart extends Component {
  render() {
    return (
      <ResponsiveContainer width={this.props.width} height={this.props.height}>
        <AreaChart
          width={this.props.width}
          height={this.props.height}
          data={data}
          margin={{
            top: 10,
            right: 15,
            left: 15,
            bottom: 10,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis hide="true" />
          <Tooltip />
          <Area type="monotone" dataKey="data" stroke="#6279ff" strokeWidth={5} fill="#c1cdff" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
