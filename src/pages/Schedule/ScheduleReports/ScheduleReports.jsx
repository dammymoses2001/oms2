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
    SchedularHeader
} from "../../../utils/datautils";
import { useNavigate } from "react-router-dom";

export const ScheduleReports = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [dailyVists, setDailyVisit] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const DropDownItems = [
        {
            name: "Visit Schedules",
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
                            columns={SchedularHeader(DropDownItems)}
                            data={SchedularData()}
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

    console.log(dailyVists, "dailyVists");
    return (
        <AppLayout mode="light">
            <div>
                <GetPage arrayComp={setPages} setPageNo={page} />
                <ModalComp
                    title={"Gideon Customer Visit List"}
                    show={showModal}
                    bodyText={
                        <div>
                            <TableCompData
                                columns={DailyVisitHeaderFull(DropDownItems)}
                                data={dailyVists}
                            />
                        </div>
                    }
                    handleClose={() => setShowModal(false)}
                />
            </div>
        </AppLayout>
    );
};
