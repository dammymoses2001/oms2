import React, { useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import NaijaStates from "naija-state-local-government";
import { CSVLink } from "react-csv";
import { BiConversation, BiSearchAlt } from "react-icons/bi";
import styled from "styled-components";

import {
    AppLayout,
    AuthLayout,
    Input,
    Loading,
    ModalComp,
    SelectComp,
    TableCompData,
    TopNav
} from "../../components";
import moment from "moment";
import { useState } from "react";
import { useAuth } from "../../hooks";
import toast from "react-hot-toast";
import Select from "react-select";

export const AdminConsole = () => {
    const initialState = {
        email: "",
        firstName: "",
        lastName: "",
        userType: "supplier",
        state: "",
        desiredLocations: {
            state: "",
            lgas: [""]
        },
        userRole: "sales_rep",
        company: "",
        companyId: "",
        allCompanies: []
    };
    const {
        AddRepresentatives,
        GetAllRepresentatives,
        GetAllCompanies,
        state: { allReps, isLoading, check, data }
    } = useAuth();
    const [showModal, setModal] = useState(false);
    const [userData, setUserData] = useState({
        ...initialState,
        company: data?.company?.name,
        companyId: data?.company?.id,
        allCompanies: [data?.company?.name]
    });
    const [selectedOption, setSelectedOption] = useState(null);

    const [query, setQuery] = useState("");

    useEffect(() => {
        if (check) {
            setModal(false);
        }
    }, [check]);

    console.log("state", data);

    const columns = [
        // {
        //     name: "#",
        //     selector: (row) => console.log(row.length, "row")
        // },
        {
            name: "No",
            selector: (row, index) => <span>{index + 1}</span>,
            width: "80px"
        },
        {
            name: "Full Name",
            selector: (row) => (
                <span>{`${row?.firstName} ${row?.lastName}`}</span>
            )
        },
        {
            name: "Added At",
            selector: (row) => moment(row?.createdAt).format("MMM Do YY")
        },
        // {
        //     name: "Location ",
        //     selector: (row) =>
        //         row?.desiredLocations[0]?.lgas?.map((item, index) => (
        //             <span key={index}>{item},</span>
        //         ))
        // },
        {
            name: "Status",
            selector: (row) => (row?.hasSubscribed ? "Active" : "InActive")
        },
        {
            name: "Rating",
            selector: (row) => (
                <span>
                    <span className="me-1">
                        <AiFillStar color="#0071FB" />
                    </span>
                    5.0
                </span>
            )
        },
        // {
        //     name: "Image ",
        //     selector: (row) => ""
        // },
        {
            name: "Actions",
            selector: (row) => row.authorized,
            cell: (row) => (
                <Dropdown>
                    <Dropdown.Toggle className="dropdown-6 text-black border text-muted">
                        ...
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item
                            onClick={() => {
                                // setEditShow(true);
                                // setEditProduct(row);
                                // setDeleteProduct(false);
                            }}
                        >
                            Edit
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => {
                                // setDeleteProduct(true);
                                // setEditProduct(row);
                                // setEditShow(false);
                            }}
                        >
                            Delete
                        </Dropdown.Item>
                        {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                    </Dropdown.Menu>
                </Dropdown>
            )
        }
    ];

    const handleFieldCSvData = (item) => {
        const newArray = [];
        item?.map((row) =>
            newArray.push({
                "Full Name": `${row?.firstName} ${row?.lastName}`,
                "Added at": moment(row?.createdAt).format("MMM Do YY"),
                Location: `${row?.desiredLocations[0]?.lgas[0]} ${row?.desiredLocations[0]?.lgas[1]}`,
                Rating: "5.0"
            })
        );
        // console.log(newArray,'newArra)
        return newArray;
    };

    const search = (allReps) => {
        return allReps?.filter((row) =>
            row?.firstName.toLowerCase().includes(query)
        );
        // console.log(data,'data')
        // return data?.length>0?data: []
    };

    const headers = [
        { label: "Full Name", key: "Full Name" },
        { label: "", key: "" },

        { label: "Added at", key: "Added at" },
        { label: "", key: "" },
        { label: "Location", key: "Location" },
        //{ label: "Status", key: "Status" },
        { label: "Rating", key: "Rating" }
    ];

    useEffect(() => {
        GetAllRepresentatives();
        GetAllCompanies();
    }, [GetAllRepresentatives, GetAllCompanies]);

    const handleLga = (lgas) => {
        const newArray = [];
        if (lgas) {
            NaijaStates.lgas(lgas)?.lgas?.forEach((item) => {
                newArray.push({
                    value: item,
                    label: item
                });
            });
        }
        // console.log(lgas,newArray,'handleLga')
        return newArray;
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };
    const {
        firstName,
        lastName,

        email,
        state,

        company,
        companyId,
        allCompanies
    } = userData;

    console.log("state", company, allCompanies);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newlgsarray = [];
        selectedOption &&
            selectedOption.map((item) => newlgsarray.push(item?.value));
        if (
            !email ||
            !firstName ||
            !lastName ||
            !newlgsarray?.length === 0 ||
            !state
        ) {
            return toast.error("All Fields are Mandatory....");
        }

        const value = {
            email: email,
            firstName: firstName,
            lastName: lastName,
            userType: "supplier",
            desiredLocations: {
                state: state,
                lgas: newlgsarray
            },
            userRole: "sales_rep",
            company: company,
            companyId: companyId,
            managerId: 1
        };
        // console.log(value)
        AddRepresentatives(value);
    };

    const Style = styled.div``;

    return (
        <AppLayout>
            <div className="d-flex align-items-center searchf px-1 ">
                <BiSearchAlt size={20} className="me-2" />
                <input
                    placeholder="Search Field Rep"
                    className="px-1 py-2 text-black"
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            <div className="mb-3 mt-4">
                <TopNav
                    TextComp={
                        <span className="color-1 ">
                            <h5 className="fw-2">Field Represntatives</h5>
                        </span>
                    }
                    RightComp={
                        <div className="color-2  butns">
                            {/* {data && (
                                    <button
                                        className="btn me-2 bg bg-1 h6"
                                        onClick={() => {
                                            setData(null);
                                            setShow(0);
                                        }}
                                    >
                                        {"Back To Customers"}
                                    </button>
                                )} */}
                            <button
                                onClick={() => setModal(true)}
                                className=" exportbtn mr-4 btn bg-6 text-white h6"
                            >
                                <FiPlus /> Add Field reps
                            </button>

                            {/* <CSVLink
                                filename={"Field Represntatives list"}
                                data={handleFieldCSvData(allReps)}
                                headers={headers}
                            >
                                <button className=" px-3 pl-4  py-1 bg bg-1 h-6 ml-4 btn1">
                                    {" "}
                                    Export{" "}
                                </button>
                            </CSVLink> */}
                        </div>
                    }
                />
            </div>

            <div>
                {isLoading ? (
                    <Loading height={"40vh"} />
                ) : (
                    // <TableCompData columns={columns} data={[search(allReps)]} />
                    <TableCompData columns={columns} data={search(allReps)} />
                )}
                <ModalComp
                    show={showModal}
                    handleClose={() => setModal(false)}
                    size="lg"
                    title={
                        <h4 className="color-3">Add Field Representative</h4>
                    }
                    bodyText={
                        <div className="px-4">
                            <form className="w-100" onSubmit={handleSubmit}>
                                <div className="row ">
                                    <div className="col-lg-6 mb-2">
                                        <Input
                                            label={"First Name"}
                                            labelclassname=""
                                            size="md"
                                            name="firstName"
                                            onChange={handleOnChange}
                                            value={firstName}
                                        />
                                    </div>
                                    <div className="col-lg-6 mb-2">
                                        <Input
                                            label={"Last Name"}
                                            labelclassname=""
                                            size="md"
                                            name="lastName"
                                            onChange={handleOnChange}
                                            value={lastName}
                                        />
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col-lg-6 mb-3">
                                        <Input
                                            label={"Email"}
                                            labelclassname=""
                                            size="md"
                                            name="email"
                                            onChange={handleOnChange}
                                            value={email}
                                        />
                                    </div>
                                    <div className="col-lg-6 mb-3">
                                        <SelectComp
                                            label={"Company"}
                                            labelclassname=""
                                            name="company"
                                            onChange={handleOnChange}
                                            selectOption="Select Company"
                                            options={allCompanies}
                                            // input="supplierName"
                                            value={company}
                                        />
                                    </div>
                                </div>
                                <div className="row mb-5">
                                    <div className="col-lg-6 mb-3">
                                        <SelectComp
                                            label={"State"}
                                            labelclassname=""
                                            name="state"
                                            onChange={handleOnChange}
                                            selectOption="Select State"
                                            options={NaijaStates.states()}
                                            value={state}
                                        />
                                    </div>
                                    <div className="col-lg-6 mb-3">
                                        <label className="mb-2">
                                            Local government Area
                                        </label>
                                        <Select
                                            borderRadius
                                            name="lgas"
                                            defaultValue={selectedOption}
                                            onChange={setSelectedOption}
                                            options={handleLga(state)}
                                            isMulti={true}
                                            placeholder="select local government"
                                            className="border select1"
                                        />
                                    </div>

                                    <div className="col-lg-6 mb-3"></div>
                                </div>
                                <div className="row mb-5">
                                    {/* <div className='col-lg-6 mb-3'>
                            <SelectComp  label={"Local Government"} labelclassname=''/>
                          </div> */}
                                    <div className="d-flex justify-content-end">
                                        <div className="col-10">
                                            <div className="row">
                                                <div className="col-6">
                                                    <button
                                                        onClick={() =>
                                                            setModal(false)
                                                        }
                                                        className="py-2 border-0 w-100"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                                <div className="col-6">
                                                    <button
                                                        type="submit"
                                                        className="py-2 border-0 w-100 bg-6 text-white"
                                                    >
                                                        Send Invite
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    }
                />
            </div>
        </AppLayout>
    );
};
