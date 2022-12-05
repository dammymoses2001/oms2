/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable sort-keys */
import React from "react";
import {  useNavigate } from "react-router-dom";

export  const Back =()=> {
    const navigate = useNavigate();
    return (
        <div>
            <a className="d-flex align-items-center"  onClick={() => navigate(-1)} aria-hidden="true" >
                <i className="bi bi-arrow-left-short mr-2 cursor" style={{ fontSize:"26px",color:"#463c74" }}>
                </i><span className="Back ">Back</span></a>

        </div>
    );
};
