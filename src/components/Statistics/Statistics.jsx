import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Assignment-1',
    uv: 60,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Assignment-2',
    uv: 57,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Assignment-3',
    uv: 58,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Assignment-4',
    uv: 55,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Assignment-5',
    uv: 50,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Assignment-6',
    uv: 52,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Assignment-7',
    uv: 59,
    pv: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/area-chart-in-responsive-container-e6dx0';

  render() {
    return (
      <div className='mx-auto  m-5 border rounded-4' style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
