import PropTypes from "prop-types";
import React from "react";
import { AuthHeader } from "./Header";
//import BackgroundImage from "../../../assets/images/pages-background-shape-2.png";

export const AuthLayout = ({ children }) => {
    return (
        <div
            id="login"
            className="page-background mb-5"
            style={{
                // background: `rgba(6, 0, 57, 0.034) url(${BackgroundImage}) no-repeat center center /cover`,
                // backgroundAttachment: "fixed",
                minHeight: "100vh"
            }}
        >
            <AuthHeader />
            {children}
        </div>
    );
};

AuthLayout.propTypes = {
    children: PropTypes.node
};
