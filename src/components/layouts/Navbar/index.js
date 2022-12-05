import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../../assets/images/logo-01.svg";
import Logo1 from "../../../assets/images/logo-02.svg";
import "./Header.scss";



export const NavbarComp = ({light}) => {
    return (
        <header className="auth_header w-100">
            <div className="navigation py-5">
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-between justify-content-center">
                        <div className="col-md-6 text-md-left text-left pl-5">
                            {/* <h2 className="font-weight-bolder">PharmaServ</h2> */}
                            <div className="logo">
                                <Link to="/">
                                    <img alt="Logo" src={light?Logo1:Logo} />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6 text-md-right mt-md-0 mt-2 text-right d-inline">
                            {/* <div className="auth_header__acc access-account">
                                <span className="auth_header__acc__desc d-inline-block font-helvetica">
                                    Already have an account?
                                </span>
                                <span className="auth_header__acc__login d-inline-block pl-3 text-uppercase">
                                    <Link to="/login">
                                        Login
                                        <i className="far fa-user fa-lg ml-2" />
                                    </Link>
                                </span>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
