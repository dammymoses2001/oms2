import React, { useState } from "react";
import {
    AppLayout,
    GetPage,
    ModalComp,
    TableCompData,
    TopNav
} from "../../../components";
import {
    DailyVisitHeader,
    DailyVisitHeaderFull,
    SchedularData,
    SchedularHeader,
    SortOrder
} from "../../../utils/datautils";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks";
import { useEffect } from "react";
import { getVisitationSchedules } from "../../../services";
import styled from "styled-components";
import { VisitationModal } from "../../../components/modules/visitationComp";
import { VisitationMapModal } from "../../../components/modules/visitationMapComp";

export const ScheduleReports = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [dailyVists, setDailyVisit] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const [showVisitModal, setShowVisitModal] = useState(false);
    const [visitData, setVisitData] = useState({});

    const [showVisitCoords, setShowVisitCoords] = useState(null);
    const [visitCoords, setVisitCoords] = useState({});

    const [visitationSchedules, setVisitationSchedules] = useState([]);

    useEffect(async () => {
        let now = new Date();
        let monthBegin = `${now.getFullYear()}-${now.getMonth() + 1}-01`;

        let future = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        let monthEnd = `${future.getFullYear()}-${
            future.getMonth() + 1
        }-${future.getDate()}`;

        const { data } = await getVisitationSchedules({
            startDate: monthBegin,
            endDate: monthEnd
        });

        setVisitationSchedules(data);
    }, []);

    const DropDownItems = [
        {
            name: "Visit Schedule",
            onClick: (row) => {
                setPage(1);
                setDailyVisit(row?.dailyVist);
                // console.log(row,'row')
            }
        },
        {
            name: "Visit Route",
            onClick: (row) => {
                setPage(0);

                // console.log(row,'row')
            }
        }
    ];

    const DropDownItems2 = [
        {
            name: "Gideon Customer Visit List",
            onClick: (row) => {
                setPage(1);
                setShowModal(true);

                // console.log(row,'row')
            }
        },
        {
            name: "Individual Activity Report",
            onClick: (row) => {
                navigate(`/individual/${row?.id}`);

                // console.log(row,'row')
            }
        }
    ];

    const setPages = [
        {
            name: "Schedule Report list",
            component: (
                <div>
                    <div className="mb-3">
                        <TopNav
                            TextComp={
                                <h5 className="color-1 ">
                                    Schedule Report list
                                </h5>
                            }
                        />
                    </div>
                    <div>
                        <TableCompData
                            columns={SchedularHeader(
                                DropDownItems,
                                visitationSchedules,
                                setShowVisitModal,
                                setVisitData,
                                setShowVisitCoords,
                                setVisitCoords
                            )}
                            data={SortOrder(visitationSchedules)}
                            pagination
                        />
                    </div>
                </div>
            )
        },
        {
            name: "Schedule Report list",
            component: (
                <div>
                    <div className="mb-3">
                        <TopNav
                            TextComp={
                                <h5 className="color-1 ">
                                    Daily Visit Summary
                                </h5>
                            }
                            RightComp={
                                <button
                                    className="btn me-2 bg bg-1 h6"
                                    onClick={() => setPage(0)}
                                >
                                    {"Back "}
                                </button>
                            }
                        />
                    </div>
                    <div>
                        <TableCompData
                            columns={DailyVisitHeader(DropDownItems2)}
                            data={dailyVists}
                        />
                    </div>
                </div>
            )
        }
    ];

    return (
        <AppLayout mode="light">
            <Style>
                <div>
                    <GetPage arrayComp={setPages} setPageNo={page} />
                    <ModalComp
                        title={"Gideon Customer Visit List"}
                        show={showModal}
                        bodyText={
                            <div>
                                <TableCompData
                                    columns={DailyVisitHeaderFull(
                                        DropDownItems
                                    )}
                                    data={dailyVists}
                                />
                            </div>
                        }
                        handleClose={() => setShowModal(false)}
                    />
                </div>
            </Style>

            {showVisitModal && (
                <VisitationModal
                    show={showVisitModal}
                    visitData={visitData}
                    setShow={setShowVisitModal}
                />
            )}

            {showVisitCoords && (
                <VisitationMapModal
                    show={showVisitCoords}
                    visitCoords={visitCoords}
                    setShow={setShowVisitCoords}
                />
            )}
        </AppLayout>
    );
};

const Style = styled.div`
    .dropbtn {
        background-color: #3498db;
        color: white;
        padding: 16px;
        font-size: 16px;
        border: none;
        cursor: pointer;
    }

    .dropbtn:hover,
    .dropbtn:focus {
        background-color: #2980b9;
    }

    .dropdown {
        position: relative;
        display: inline-block;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f1f1f1;
        min-width: 160px;
        overflow: auto;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
    }

    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }

    .dropdown a:hover {
        background-color: #ddd;
    }
`;
