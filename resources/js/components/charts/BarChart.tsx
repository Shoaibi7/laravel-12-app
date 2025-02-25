// resources/js/components/charts/BarChart.tsx
import React from 'react';
import {
    BarChart as RechartsBarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

interface BarChartProps {
    data: { month: string; sales: number }[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <RechartsBarChart
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

                {/* Bar */}
                <Bar dataKey="sales" fill="#8884d8" radius={[4, 4, 0, 0]} animationDuration={1000} />
            </RechartsBarChart>
        </ResponsiveContainer>
    );
};

export default BarChart;
