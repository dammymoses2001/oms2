import React from "react";
import { Outlet } from "react-router-dom";

export const ProductLayout = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};
