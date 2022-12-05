import React from "react";
import {
    AppLayout,
    // Button,
    // Loading,
    // TableComp,
    TopNav
} from "../../components";
// import moment from "moment";

import styled from "styled-components";
// import { Link } from "react-router-dom";
// import { useAuth } from "../../hooks";
// import { BsDot } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

// import {

//     CustomerHeader,

//     CustomerOrderHeader,

//     ProductHeader
// } from "../../utils/datautils";
// import { Dropdown } from "react-bootstrap";
// import { formatMoney } from "../../utils";

const Style = styled.div`
    .whatsapp {
        position: fixed;
        right: 25px;
        bottom: 50px;
        background: transparent;
    }
    .hover {
    }
`;

export const HelpCenter = () => {
    return (
        <AppLayout mode="light">
            <Style className="position-relative">
                <div className="mb-3">
                    <TopNav
                        TextComp={
                            <span className="color-1 h4">Help Center</span>
                        }
                        // RightComp={
                        //     <div className="color-2">
                        //         {data && (
                        //             <button
                        //                 className="btn me-2 bg bg-1 h6"
                        //                 onClick={() => {
                        //                     setData(null)
                        //                     setShow(0)
                        //                 }
                        //                 }
                        //             >
                        //                 {"Back To Customers"}
                        //             </button>
                        //         )}
                        //         <Link to="#" className="mr-2 btn bg-1 h6">
                        //             Add Customer
                        //         </Link>
                        //     </div>
                        // }
                    />
                </div>

                <div className="bg-white p-3 mb-3">
                    <h4 className="fw-1 mb-3 text-2">
                        FAQ
                    </h4>
                    <div>
                        {/* <div className="text-3">
                            <h6 className="fw-1 mb-2">
                                <span>
                                    <BsDot size={30} />
                                </span>
                                We offer infrastructure between Pharmacies and
                                suppliers
                            </h6>
                            <h6 className="fw-1 mb-2">
                                <span>
                                    <BsDot size={30} />
                                </span>
                                We offer infrastructure between Pharmacies and
                                suppliers
                            </h6>
                            <h6 className="fw-1 mb-2">
                                <span>
                                    <BsDot size={30} />
                                </span>
                                We offer infrastructure between Pharmacies and
                                suppliers
                            </h6>
                        </div> */}
                    </div>
                </div>

                <div className="bg-white p-3 mb-7">
                    <div className="mb-5">
                        <TopNav
                            TextComp={
                                <h5 className="color-1 h4">Questions</h5>
                            }
                            // DropDownText={
                            //     <span>
                            //         <span className="text-2"></span>
                            //         Relevance
                            //     </span>
                            // }
                        />
                    </div>
                    <div className="border pt-4 pb-3 px-3 rounded mb-3">
                        <h6 className="mb-3 text-2">
                        What does PharmaServ Order Management System do?
                        </h6>
                        <div>
                            <p className="mb-2 text-3">
                            PharmaServ order management system helps you track
orders, sales, and fulfillment in real-time. It’s especially
common for companies that receive orders from more than
one sales reps or channels.
                            </p>
                            <div className="text-end d-flex justify-content-end align-items-center">
                                <h6 className="me-3 mb-0 text-2">
                                    Was this helpful?
                                </h6>
                                <button className="btn btn-x1 text-white font-weight-light bg-6  me-3">
                                    Yes
                                </button>
                                <button className="btn btn-x1 text-black bg-9 font-weight-light  ">
                                    No
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="border pt-4 pb-3 px-3 rounded mb-5">
                        <h6 className="mb-3 text-2">
                        How does an PharmaServ OMS work?
                        </h6>
                        <div>
                            <p className="mb-2 text-3">
                            PharmaServ OMS consolidates all your sales into one digital
space. So whether receive an order from a physical store
outlet or anywhere else, you can access and fulfill all sales
from a single login.
                            </p>
                            <div className="text-end d-flex justify-content-end align-items-center">
                                <h6 className="me-3 mb-0 text-2">
                                    Was this helpful?
                                </h6>
                                <button className="btn btn-x1 text-white font-weight-light bg-6  me-3">
                                    Yes
                                </button>
                                <button className="btn btn-x1 text-black bg-9 font-weight-light  ">
                                    No
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border pt-4 pb-3 px-3 rounded mb-5">
                        <h6 className="mb-3 text-2">
                        Who is PharmaServ OMS for?
                        </h6>
                        <div>
                            <p className="mb-2 text-3">
                            This platform is for any and all registered medical sales
professionals.
                            </p>
                            <div className="text-end d-flex justify-content-end align-items-center">
                                <h6 className="me-3 mb-0 text-2">
                                    Was this helpful?
                                </h6>
                                <button className="btn btn-x1 text-white font-weight-light bg-6  me-3">
                                    Yes
                                </button>
                                <button className="btn btn-x1 text-black bg-9 font-weight-light  ">
                                    No
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border pt-4 pb-3 px-3 rounded mb-5">
                        <h6 className="mb-3 text-2">
                        How do I sign up or register?
                        </h6>
                        <div>
                            <p className="mb-2 text-3">
                            Our sign up process requires two simple steps. Register on
our platform, go to your email, copy your token and verify
your account with the token you receive.
                            </p>
                            <div className="text-end d-flex justify-content-end align-items-center">
                                <h6 className="me-3 mb-0 text-2">
                                    Was this helpful?
                                </h6>
                                <button className="btn btn-x1 text-white font-weight-light bg-6  me-3">
                                    Yes
                                </button>
                                <button className="btn btn-x1 text-black bg-9 font-weight-light  ">
                                    No
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mb-5">
                        <h6 className="fw-1">
                            <span className="text-3 me-2 fw-1">
                                Need more help? call{" "}
                            </span>
                            <span className="fw-bold"> 09160717495</span>{" "}
                        </h6>
                    </div>
                </div>
                <div className="whatsapp">
                    <div className="hover video animate__animated animate__tada animate__delay-2s animate__infinite	infinite">
                        <a
                            target={"_blank"}
                            href="https://api.whatsapp.com/send?phone=2349160717495"
                            rel="noreferrer"
                            className=""
                        >
                            <FaWhatsapp size={60} color={"green"} />
                        </a>
                        {/* <a href="whatsapp://send?abid=+2349160717495r&text=Hello%2C%20World!">
                            <FaWhatsapp size={60} color={"green"} />
                        </a> */}
                    </div>
                </div>
            </Style>
        </AppLayout>
    );
};
