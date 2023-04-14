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
    { month: "Dec", totalAmount: 9000, count: 0 }
];

export const SimpleLineChart = ({ newData = [] }) => {
    // Find the maximum value in the data for both lines

    const maxLine1 = newData.reduce(
        (max, item) => (item.totalAmount > max ? item.totalSalesOrders : max),
        0
    );
    const maxLine2 = newData.reduce(
        (max, item) =>
            item.totalSalesCollection > max ? item.totalSalesCollection : max,
        0
    );
    // const maxLine2 = Math.max(
    //     ...newData?.map((item) => item.totalSalesCollection)
    // );

    // Normalize the data for both lines by dividing by their respective maximum values
    const normalizedData = newData?.map((item) => ({
        ...item,
        totalAmountNormalized: item.totalSalesOrders / maxLine1,
        totalSalesCollectionNormalized: item.totalSalesCollection / maxLine2
    }));

    console.log(normalizedData,'newData')


    const tooltipFormatter = (value, name, props) => {
        const originalValue =
            props.payload[name] *
            (name === "totalAmountMin" ? maxLine1 : maxLine2);
        console.log(originalValue, "originalValue");
        return [originalValue.toLocaleString(), name];
    };

    // Custom tick formatter for YAxis to display original data
    const yAxisTickFormatter = (value, name, props) => {
        console.log(value, props, "yAxisTickFormatter");
        return value.toLocaleString(); // Customize the format as needed
    };

    const CustomLegend = (props) => {
        const { payload } = props;

        return (
            <ul className="d-flex gap-5 justify-content-center">
                {payload.map((entry, index) => (
                    <li key={`item-${index}`}>
                        <span style={{ color: entry.color }}>
                            {entry.value === "totalSalesOrders"
                                ? " Total Sales Collected"
                                : "Total Sales Collected"}
                        </span>
                    </li>
                ))}
            </ul>
        );
    };

    //  console.log(normalizedData, "normalizedData");
    return newData?.length > 1 ? (
        <div
            className={`${
                newData?.length > 1 && "animate__animated animate__fadeInUp"
            }`}
            style={{ width: "100%" }}
        >
            <ResponsiveContainer width="100%" height={400}>
                <AreaChart
                    width={500}
                    height={500}
                    data={normalizedData}
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
                    <YAxis
                        // tickFormatter={yAxisTickFormatter}
                        tickFormatter={(data) => formatNumber(data)}
                    />
                    <Tooltip
                        formatter={(value, name, props) => {
                            if (Array.isArray(value)) {
                                value = value[0].value; // Extract the value from the first element of the array
                            }
                            return value.toLocaleString();
                        }}
                    />
                    <Legend content={<CustomLegend />} />
                    <Area
                        type="monotone"
                        dataKey="totalSalesCollection"
                        stackId="1"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                        strokeWidth={5}
                    />
                    <Area
                        type="monotone"
                        dataKey="totalSalesOrders"
                        stackId="1"
                        stroke="#8884d8"
                        fill="#8884d8"
                        strokeWidth={5}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    ) : (
        <div style={{ height: "40vh" }}></div>
    );
};
