// resources/js/components/charts/LineChart.tsx
import React from 'react';
import {
    LineChart as RechartsLineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

interface LineChartProps {
    data: { month: string; users: number }[];
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <RechartsLineChart
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                {/* Grid lines */}
                <CartesianGrid strokeDasharray="3 3" />

                {/* Axes */}
                <XAxis dataKey="month" />
                <YAxis />

                {/* Tooltip */}
                <Tooltip
                    contentStyle={{
                        backgroundColor: '#fff',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                    }}
                />

                {/* Legend */}
                <Legend />

                {/* Line */}
                <Line type="monotone" dataKey="users" stroke="#82ca9d" strokeWidth={2} />
            </RechartsLineChart>
        </ResponsiveContainer>
    );
};

export default LineChart;
