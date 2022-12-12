import React, { useState, useEffect } from "react";
import { BiBarcode } from "react-icons/bi";
import { BsBarChartFill } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import { IoIosHelpBuoy, IoIosSettings } from "react-icons/io";
import { AiOutlineFileSearch } from "react-icons/ai";
import { RiFileList3Fill } from "react-icons/ri";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo from "../../assets/images/logo-01.svg";

import { useAuth } from "../../hooks";
import { defaultLogo } from "../../utils/datautils";

const Style = styled.div`
    img {
        width: 100% !important;
    }
`;
export const SideBar = () => {
    const [settings, setSetting] = useState(false);
    const [admin, setAdmin] = useState(false);
    const [schedule, setSchedule] = useState(false);
    const { state, logout, getProfile } = useAuth();

    const { data } = state;

    useEffect(() => {
        getProfile();
    }, [getProfile]);

    let companyLogo = null;

    /**
     * Pick out company logo
     */
    if (data !== undefined && "company" in data) {
        companyLogo = "logo" in data.company ? data.company.logo : null;
    }

    return (
        <Style>
            <div className="mb-5">
                <div className="text-center me-5 me-md-0">
                    <Link to="/">
                        <img alt="Logo" src={Logo} />
                    </Link>
                </div>
                {companyLogo && (
                    <div>
                        <img
                            alt="Logo"
                            style={{ width: "100%" }}
                            src={companyLogo}
                        />
                    </div>
                )}
            </div>

            <div className="text-center">
                <Link to="/">
                    <div className="d-flex align-items-center pl-3 mb-5  text-muted">
                        <div className="col-md-3">
                            {" "}
                            <BsBarChartFill className="me-3 mb-0" />
                        </div>
                        <div>
                            {" "}
                            <h6 className="mb-0">DashBoard</h6>
                        </div>{" "}
                    </div>
                </Link>
                <Link to="/product">
                    <div className="d-flex align-items-center  pl-3  text-muted   mb-5">
                        <div className="col-md-3">
                            {" "}
                            <BiBarcode size={20} className="me-3" />
                        </div>
                        <div>
                            {" "}
                            <h6 className="mb-0 ">Product</h6>
                        </div>
                    </div>
                </Link>
                <Link to="/order/all">
                    <div className="d-flex align-items-center  pl-3  text-muted mb-5">
                        <div className="col-md-3">
                            {" "}
                            <RiFileList3Fill size={20} className="me-3" />
                        </div>
                        <div>
                            {" "}
                            <h6 className="mb-0 ">Manage Orders</h6>
                        </div>
                    </div>
                </Link>

                <Link to="/customer">
                    <div className="d-flex align-items-center  pl-3  text-muted mb-5">
                        <div className="col-md-3">
                            {" "}
                            <HiOutlineUser size={20} className="me-3" />
                        </div>
                        <div>
                            {" "}
                            <h6 className="mb-0 ">Customers</h6>
                        </div>
                    </div>
                </Link>

                {/* <Link to='/help-center'>
                <div className="d-flex align-items-center  pl-3  text-muted mb-5">
                <div className="col-md-3">
                        {" "}
                        <AiOutlineFileSearch size={20} className="me-3" />
                    </div>
                    <div>
                        {" "}
                        <h6 className="mb-0 ">Schedule </h6>
                    </div>
                </div>
                </Link> */}

                <div className=" mb-5">
                    <div className="d-flex align-items-center  pl-3  text-muted mb-3 ">
                        <div className="col-md-3">
                            {" "}
                            <AiOutlineFileSearch size={20} className="me-3" />
                        </div>
                        <div
                            onClick={() => setSchedule(!schedule)}
                            className="d-flex justify-content-between w-100 video"
                        >
                            {" "}
                            <h6 className="mb-0 text-nowrap">Schedule </h6>
                            {!schedule ? (
                                <MdKeyboardArrowUp />
                            ) : (
                                <MdKeyboardArrowDown />
                            )}
                        </div>
                    </div>
                    {schedule && (
                        <>
                            <div className="text-start ps-4 ps-lg-5 mb-4">
                                <Link
                                    className="text-black text-muted "
                                    to={"/reports"}
                                >
                                    <h6>Schedule Report </h6>
                                </Link>
                            </div>

                            <div className="text-start ps-4 ps-lg-5 mb-4">
                                <Link
                                    className="text-black text-muted "
                                    to={"/Visit-Targets"}
                                >
                                    <h6>Visit targets </h6>
                                </Link>
                            </div>
                        </>
                    )}
                </div>

                <Link to="/help-center">
                    <div className="d-flex align-items-center  pl-3  text-muted mb-5">
                        <div className="col-md-3">
                            {" "}
                            <IoIosHelpBuoy size={20} className="me-3" />
                        </div>
                        <div>
                            {" "}
                            <h6 className="mb-0 ">Help Center </h6>
                        </div>
                    </div>
                </Link>

                <div className=" mb-7">
                    <div className="d-flex align-items-center  pl-3  text-muted mb-3 ">
                        <div className="col-md-3">
                            {" "}
                            <GrUserAdmin size={20} className="me-3" />
                        </div>
                        <div
                            onClick={() => setAdmin(!admin)}
                            className="d-flex justify-content-between w-100 video"
                        >
                            {" "}
                            <h6 className="mb-0 text-nowrap">Admin Console </h6>
                            {!admin ? (
                                <MdKeyboardArrowUp />
                            ) : (
                                <MdKeyboardArrowDown />
                            )}
                        </div>
                    </div>
                    {admin && (
                        <>
                            <div className="text-start ps-4 ps-lg-5 mb-4">
                                <Link
                                    className="text-black text-muted "
                                    to={"/admin/setting"}
                                >
                                    <h6>Field Rep </h6>
                                </Link>
                            </div>
                            <div className="text-start ps-4 ps-lg-5 mb-4">
                                {/* <Link className="text-black text-muted " to={'/settings/supplier'}><h6>Workspace </h6></Link> */}
                            </div>
                            <div className=" mb-5">
                                <div className="d-flex align-items-center  pl-3  text-muted mb-3 ">
                                    <div className="col-md-3">
                                        {" "}
                                        <IoIosSettings
                                            size={20}
                                            className="me-3"
                                        />
                                    </div>
                                    <div
                                        onClick={() => setSetting(!settings)}
                                        className="d-flex justify-content-between w-100 video"
                                    >
                                        {" "}
                                        <h6 className="mb-0 ">Settings </h6>
                                        {!settings ? (
                                            <MdKeyboardArrowUp />
                                        ) : (
                                            <MdKeyboardArrowDown />
                                        )}
                                    </div>
                                </div>
                                {settings && (
                                    <>
                                        <div className="text-start ps-4 ps-lg-5 mb-4">
                                            <Link
                                                className="text-black text-muted "
                                                to={"/settings/myprofile"}
                                            >
                                                <h6>Personal </h6>
                                            </Link>
                                        </div>
                                        <div className="text-start ps-4 ps-lg-5 mb-4">
                                            <Link
                                                className="text-black text-muted "
                                                to={"/settings/supplier"}
                                            >
                                                <h6>Workspace </h6>
                                            </Link>
                                        </div>
                                    </>
                                )}
                            </div>
                        </>
                    )}
                </div>

                <div className="mb-5">
                    <button onClick={logout} className="border-0 px-3 py-2">
                        <span className="me-3">
                            <FiLogOut />
                        </span>
                        Log Out
                    </button>
                </div>
            </div>
        </Style>
    );
};
