import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Submit = () => {
    const data = [
        {
            name: 'Page A',
            marks: 4000,
            quiz: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            marks: 3000,
            quiz: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            marks: 2000,
            quiz: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            marks: 2780,
            quiz: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            marks: 1890,
            quiz: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            marks: 2390,
            quiz: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            marks: 3490,
            quiz: 4300,
            amt: 2100,
        },
    ];
    return (
        <div>
            <h1 className='text-5xl text-orange-700 mb-5 mt-5 font-bold'>This is a Assignment Submit.</h1>
        <LineChart width={800} height={600} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="marks" stroke="#82ca9d" />
        </LineChart>

    </div>
    );
};

export default Submit;