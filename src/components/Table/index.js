/* eslint-disable react/prop-types */
/* eslint-disable sort-keys */
/* eslint-disable react/display-name */
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";
import React from "react";
import DataTable from "react-data-table-component";

import styled from "styled-components";

//import movies from "./movies";

const Style = styled.div`
    width: 100%;

    .bIvCTc {
        margin-bottom: 15rem;
    }
    .dkBBnC,
    .jbSrtK {
        padding: 0 1rem;
    }
    .fhCFWO {
        color: #2e2c34 !important;
        font-weight: 700;
    }
    .rdt_TableHeadRow {
        font-size: 14px !important;
        // color:red;
        color: #463c74;
        background: #f0f2f8;
    }
    .rdt_TableRow {
        padding: ${(props) =>
            props?.RowPadding ? props?.RowPadding : "10px 0"};
    }
    .rdt_TableBody {
        margin-bottom: 100px;
    }
`;

export const TableCompData = ({
    title,
    data = [],
    pagination,
    columns,
    rowPadding
}) => {
    return (
        <Style RowPadding={rowPadding}>
            <Card>
                <DataTable
                    responsive={true}
                    title={title}
                    columns={columns}
                    data={data?.length > 0 ? data : []}
                    // defaultSortFieldId={1}
                    sortIcon={<SortIcon />}
                    pagination={pagination ? true : false}

                    // paginationRowsPerPageOptions={[5,10,15]}

                    // selectableRows
                />
            </Card>
        </Style>
    );
};
