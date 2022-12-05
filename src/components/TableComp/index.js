import styled from "styled-components";
import React from "react";
import { Table } from "react-bootstrap";

const Style = styled.div``;

export const TableComp = ({
    TableHeader = [],
    TableBodyData = [],
    loading,
    data = [],
    emptyText
}) => {
    return (
        <Style>
            {data.length > 0 ? (
                <Table responsive="lg">
                    <thead>
                        <tr className="text-uppercase">
                            {TableHeader?.map((item, index) => (
                                <th key={index} className="py-3 fw-2">
                                    {item?.name}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="pb-5">
                        <TableBodyData />
                    </tbody>
                </Table>
            ) : (
                <div className="text-center py-5 w-100">
                    {emptyText ? emptyText : "No Data Available"}
                </div>
            )}
        </Style>
    );
};
