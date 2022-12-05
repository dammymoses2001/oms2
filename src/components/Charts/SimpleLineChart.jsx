

import React from "react";
import {
    Area,
    AreaChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

const data = [
    {
        name: "Jan",
        Totalviews: 4000,
        Productsold: 2400,
        amt: 2400
    },
    {
        name: "Feb",
        Totalviews: 3000,
        Productsold: 1398,
        amt: 2210
    },
    {
        name: "March",
        Totalviews: 2000,
        Productsold: 9800,
        amt: 2290
    },
    {
        name: "April",
        Totalviews: 2780,
        Productsold: 3908,
        amt: 2000
    },
    {
        name: "May",
        Totalviews: 1890,
        Productsold: 4800,
        amt: 2181
    },
    {
        name: "June",
        Totalviews: 2390,
        Productsold: 3800,
        amt: 2500
    },
    {
        name: "July",
        Totalviews: 3490,
        Productsold: 4300,
        amt: 2100
    }
];

export const  SimpleLineChart = ()=>{

    return (
        <div style={{ width: "100%" }}>
           

           

            <ResponsiveContainer width="100%" height={300}>
                <AreaChart
                    width={500}
                    height={500}
                    data={data}
                    syncId="anyId"
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="Totalviews" stroke="#82ca9d" strokeDasharray="3 4 5 2" fill="#8884d8" />
                    <Area type="monotone" dataKey="Productsold" stroke="#8884d8" strokeDasharray="5 5"  fill="#82ca9d" />
                </AreaChart>
            </ResponsiveContainer>

            
        </div>
    );
  
};
