

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
import { formatNumber } from "../../utils";

const data = [
    { month: "Jan", totalAmount: 0, count: 0 },
    { month: "feb", totalAmount: 0, count: 0 },
    { month: "March", totalAmount: 0, count: 0 },
    { month: "Apr", totalAmount: 0, count: 0 },
    { month: "May", totalAmount: 0, count: 0 },
    { month: "Jun", totalAmount: 0, count: 0 },
    { month: "Jul", totalAmount: 0, count: 0 },
    { month: "Aug", totalAmount: 0, count: 0 },
    { month: "Sep", totalAmount: 0, count: 0 },
    { month: "Oct", totalAmount: 0, count: 0 },
    { month: "Nov", totalAmount: 3000, count: 0 },
    { month: "Dec", totalAmount: 9000, count: 0 },
  
];

export const  SimpleLineChart = ({newData=[]})=>{

    return (
        <div style={{ width: "100%" }}>
           

           

            <ResponsiveContainer width="100%" height={300}>
                <AreaChart
                    width={500}
                    height={500}
                    data={newData}
                    syncId="anyId"
                    margin={{
                        top: 10,
                        right: 30,
                        left: 50,
                        bottom: 0
                    }}
                >
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis dataKey="month" />
                    <YAxis  tickFormatter={(data)=>formatNumber(data)}/>
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="totalAmount" stroke="#8884d8" strokeDasharray="3 4 5 2" fill="#8884d8" />
                    <Area type="monotone" dataKey="count" stroke="#82ca9d" strokeDasharray="5 5"  fill="#82ca9d" />
                </AreaChart>
            </ResponsiveContainer>

            
        </div>
    );
  
};
