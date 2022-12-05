import propTypes from "prop-types";
import React from "react";
import { AuthProvider } from "./auth/provider";

export const Providers = ({ children }) => {
    return <AuthProvider>{children}</AuthProvider>;
};

Providers.propTypes = {
    children: propTypes.node.isRequired
};
