import React from "react";
import { Spinner } from "react-bootstrap";
import styled from "styled-components";
import Logo from '../../assets/images/logo-01.svg'

const Style = styled.div`
    
     height: ${props=>props?.height?props?.height:'80vh'};
    display: flex;
    justify-content: center;
    align-items: center; */
`;

export const Loading = ({height}) => {
    return (
        <Style height={height}>
            <div
                className="d-flex justify-content-center align-items-center vh-100"
            // style={{ height:height?`${height} !important`: "100vh" }}
            >
               <Spinner animation="border" />
            </div>
        </Style>
    );
};
export const MainLoading = ({height}) => {
    return (
        <Style>
            <div
                className="d-flex justify-content-center align-items-center vh-100"
            style={{ height:height?height: "100vh" }}
            >
                <div className="animate__animated animate__bounce animate__infinite	infinite">
                    <img src={Logo} alt="logo"/>
                </div>
            </div>
        </Style>
    );
};
