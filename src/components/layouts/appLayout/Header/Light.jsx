/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../../assets/images/logo-01.svg";

export const LightAppHeader = ({ logout,user,state,cartTotal }) => {
   
    
    return (
        <header className="w-100">
            {/* <div className="w-100 header-discounts bg-warning text-dark text-uppercase py-3">
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
            </div> */}
            <div className="navigation pt-2 pt-md-5 pb-2 pb-md-3">
                <div className="container pt-4 mt-5 mt-md-0">
                    <div className="row">
                        <div className="col-12 col-md-4 mb-3 text-center text-md-left">
                            <div className="dropdown d-inline-block mr-1">
                                <button
                                    className="btn text-white px-4 text-uppercase font-helvetica btn-lg dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    style={{
                                        backgroundColor: "#463c74",
                                        border: "2px solid #463c74",
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
                            {/* <Link
                                to=""
                                className="btn btn-outline-warning font-helvetica text-uppercase btn-lg d-inline-block small"
                                role="button"
                                aria-disabled="true"
                                style={{
                                    border: "2px solid #463c74",
                                    borderRadius: 0,
                                    color: "#463c74",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    letterSpacing: "2.16px"
                                }}
                            >
                                Contact
                            </Link> */}
                        </div>
                        <div className="col-12 col-md-4 text-center text-md-center mb-3">
                            <div className="logo">
                                <Link to="/">
                                    <img alt="Logo" src={Logo} />
                                </Link>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 text-center text-md-right d-inline">
                            {!state.isloading && !user ? (
                              
                                <div className="access-account">
                                    <span className="d-inline-block pl-3 text-uppercase text-white">
                                        <Link to="/login">
                                            Login <i className="far fa-user" />
                                        </Link>
                                    </span>
                                </div>
                            ) : ( 
                                // <span>hello</span>
                                <span  className="access-account">
                                    <Link to="/cart">
                                        <span className="d-inline-block pl-3 text-capitalize added-products-to-cart">
                                            <i className="bi bi-cart-fill" />
                                            {cartTotal>0 && <span className="added-number">{cartTotal}</span>}  
                                        </span>
                                    </Link>
                                    <button
                                        onClick={logout}
                                        className="btn d-inline-block pl-3 text-uppercase text-dark"
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
