import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
//import { Loading } from "../components";
import { useAuth } from "../hooks";

export const ProtectedRoute = () => {
    const navigate = useNavigate();

    const { state } = useAuth();
    const StateComp = state;

    //const [ loading,setLoading] = useState(true);
    // console.log(state,"proctedroute");

    useEffect(() => {
        if (StateComp?.isLoggedIn === false || state?.data === null) {
            localStorage.clear();
            sessionStorage.clear();
            return navigate("/login");
        }

        // setLoading(false);
    }, [StateComp?.isLoggedIn, navigate, state?.data,  state?.isLoggedIn]);

    return state.isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};
