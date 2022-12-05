import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";

const Style = styled.div`
.card{
    height:100% !important;
    border-radius: 5px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.04);
  background-color: #fff;
}
`;

export  const CardComp = ({ bodyText }) => {
    return (
        <Style className="h-100 px-lg-4" >
            <Card className="h-100" body>
                {bodyText}
            </Card>
        </Style>
    );
};
