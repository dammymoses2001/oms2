/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../../assets/images/logo-02.svg";
//import { Button } from "../../../../components";

export const DarkAppHeader = ({ user, logout,cartTotal }) => {
    //  console.log(cartTotal,"cartTotal");
    return (
        <header className="w-100">
            <div className="w-100 header-discounts bg-warning text-dark text-uppercase py-3">
                <div className="container">
                    <div className="row">
                        <Link
                            to=""
                            className="text-center text-dark w-100 small"
                        >
                            New medicine in glaxosmithkline today 25% Discount
                        </Link>
                    </div>
                </div>
            </div>
            <div className="navigation pt-2 pt-md-5 pb-2 pb-md-5">
                <div className="container pt-4 mt-5 mt-md-0">
                    <div className="row">
                        <div className="col-12 col-md-4 mb-3 text-center text-md-left">
                            <div className="dropdown d-inline-block mr-1">
                                <button
                                    className="btn bg-white px-4 border-white font-helvetica text-uppercase btn-lg dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    style={{
                                        border: "2px solid",
                                        borderRadius: 0,
                                        fontSize: "14px",

                                        fontWeight: "bold",
                                        letterSpacing: "2.16px"
                                    }}
                                >
                                    Brands
                                </button>
                                <div
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton"
                                >
                                    <a className="dropdown-item" href=" ">
                                        Brands 1
                                    </a>
                                    <a className="dropdown-item" href=" ">
                                        Brands 2
                                    </a>
                                    <a className="dropdown-item" href=" ">
                                        Brands 3
                                    </a>
                                </div>
                            </div>
                            <Link
                                to=""
                                className="btn btn-outline-info px-4 border-sm font-helvetica border-white text-white text-uppercase btn-lg d-inline-block "
                                role="button"
                                aria-disabled="true"
                                style={{
                                    border: "2px solid #fff",
                                    borderRadius: 0,
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    letterSpacing: "2.16px"
                                }}
                            >
                                Contact
                            </Link>
                        </div>
                        <div className="col-12 col-md-4 text-center text-md-center mb-3">
                            <div className="logo">
                                <Link to="/">
                                    <img alt="Logo" src={Logo} />
                                </Link>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 text-center text-md-right d-inline">
                            {!user ? (
                                <div className="access-account">
                                    <span className="d-inline-block pl-3 text-uppercase text-white">
                                        <Link
                                            to="/login"
                                            className="text-white"
                                        >
                                            Login <i className="far fa-user" />
                                        </Link>
                                    </span>
                                </div>
                            ) : (
                                <span className="access-account">
                                    <Link to="/cart">
                                        <span className="d-inline-block text-dark pl-3 text-capitalize added-products-to-cart">
                                            <i className="bi bi-cart-fill" />
                                            {cartTotal>0 && <span className="added-number">{cartTotal}</span>}  
                                        </span>
                                    </Link>
                                    <button
                                        onClick={logout}
                                        className="btn d-inline-block pl-3 text-uppercase text-white"
                                    >
                                        Logout <i className="far fa-user" />
                                    </button>
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
