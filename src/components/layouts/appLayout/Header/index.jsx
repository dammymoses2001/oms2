import PropTypes from "prop-types";
import React from "react";
import { DarkAppHeader } from "./Dark";
import {  NewLight } from "./NewLight";
import { useAuth } from "../../../../hooks";

export const AppHeader = ({ mode,handleShow }) => {
    const { state, logout,getCart  } = useAuth();
    
    
    return mode === "light" ? (
        <NewLight user={state.data} state={state} logout={logout} cartTotal={getCart?.cartlength} handleShow={handleShow}/>
    ) : (
        <DarkAppHeader user={state.data} logout={logout} cartTotal={getCart?.cartlength} />
    );
};

AppHeader.propTypes = {
    mode: PropTypes.string.isRequired
};
