

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
    const CustomLegend = (props) => {
        const { payload } = props;
        
        return (
          <ul className="d-flex gap-5 justify-content-center">
            {payload.map((entry, index) => (
              <li key={`item-${index}`}>
                <span style={{ color: entry.color }}>{entry.value === 'totalAmount' ? 'Total Amount' : 'Total Sales Collected'}</span>
              </li>
            ))}
          </ul>
        );
      };
    return (
       newData?.length>1 ?
        <div className={`${newData?.length>1&&'animate__animated animate__fadeInUp'}`} style={{ width: "100%" }}>
           

           

            <ResponsiveContainer width="100%" height={300}>
                <AreaChart
                    width={500}
                    height={500}
                    data={newData}
                    syncId="anyId"
                    margin={{
                        top: 10,
                        right: 30,
                        left: 40,
                        bottom: 0
                    }}
                >
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis dataKey="month" />
                    <YAxis  tickFormatter={(data)=>formatNumber(data)}/>
                    <Tooltip />
                    <Legend content={<CustomLegend/>} />
                    <Area type="monotone" dataKey="totalAmount" stroke="#8884d8" strokeDasharray="3 4 5 2" fill="#8884d8" />
                    <Area type="monotone" dataKey="totalSalesCollection" stroke="#82ca9d" strokeDasharray="3 4 5 2"  fill="#82ca9d" />
                </AreaChart>
            </ResponsiveContainer>

            
        </div>:
        <div style={{height:'40vh'}}></div>
    );
  
};
