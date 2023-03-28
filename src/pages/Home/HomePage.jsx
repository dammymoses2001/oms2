import React, { useEffect } from "react";

//import { useNavigate } from "react-router-dom";
import moment from "moment";

import styled from "styled-components";
import { useQuery } from "react-query";
import {
    AppLayout,
    MapandTopAreas,
    Chart,
    TopCustomerAndTopProduct,
    OrderComp,
    OrderModal,
    OrderProductModal,
    DashboardDataComp,
    CardComp,
    TopNav
} from "../../components";
import { useAuth } from "../../hooks";

import { formatMoney } from "../../utils";
import Product1 from "../../assets/images/product-1.png";

import {
    // mainreferenceData,
    // topProductHeader,
    checkStock,
    HeaderOrder,
    ProductColumn
} from "../../utils/datautils";

import {
    DashboardMetrics,
    getAllUserProduct,
    getMetricsOrders,
    getOrder
} from "../../services";
import { useState } from "react";
import { BsCart3, BsThreeDots } from "react-icons/bs";
import { GiSwapBag } from "react-icons/gi";
import { FiTrendingUp } from "react-icons/fi";
import { SiMattermost } from "react-icons/si";

const dashboardSummaryData = [
    {
        icon: <GiSwapBag className="h5 color-2 mb-0" />,
        sales: "0",
        title: "Total Sales Order"
    },
    {
        icon: <BsCart3 className="h5 color-2 mb-0" />,
        sales: "0",
        title: "Total Collected Sales"
    },
    {
        icon: <FiTrendingUp className="h5 text-success  mb-0" />,
        sales: "0",
        title: "Growth",
        gain: true
    }
];

function to2DecPlaces(val) {
    return val.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
}

const HomePage = () => {
    const {
        state,
        AcceptOrderFunc,
        RejectOrderFunc,
        GetAllMetricsOrders,
        GetAllLeadsCompany,
        GetAllTopCustomers,
        GetAllTopArea,
        GetCompanyChart,
        getCompanyChartFuc:{companyChart,isLoading:chartLoader}
        // state: { data,dashboardMertics,MapMertics },
    } = useAuth();
    const [show, setShow] = useState(false);

    const [orderData, setOrderData] = useState(false);
    const [declineModal, setDeclineModal] = useState(false);
    const [supplierDetail, setSupplierDetail] = useState();
    const [rejectReason, setRejectReason] = useState("");
    const { data: dataOrders, isLoading } = useQuery("get-orders", getOrder, {
        // refetchOnWindowFocus: true,
        // refetchInterval: 2000
        // refetchIntervalInBackground: true,
    });

    const { data, isLoading: productLoading } = useQuery(
        "get-products",
        getAllUserProduct
    );

    const [dSumData, setDSumData] = useState(dashboardSummaryData);
    const [timePeriodSelection, setTimePeriodSelection] = useState([
        "Month",
        "Month",
        "Month"
    ]);

    // console.log(data,'datadatadata')
    // [sales, collected and growth]
    const [yesterdayMetrics, setYesterdayMetrics] = useState([0, 0, 0]);
    const [weekMetrics, setWeekMetrics] = useState([0, 0, 0]);
    const [monthMetrics, setMonthMetrics] = useState([0, 0, 0]);

    useEffect(() => {
        const dSumData_clone = dSumData.map((i) => ({ ...i }));

        if (timePeriodSelection[0].toLocaleLowerCase() === "yesterday") {
            dSumData_clone[0].sales = yesterdayMetrics[0];
        } else if (timePeriodSelection[0].toLocaleLowerCase() === "week") {
            dSumData_clone[0].sales = weekMetrics[0];
        } else {
            dSumData_clone[0].sales = monthMetrics[0];
        }

        if (timePeriodSelection[1].toLocaleLowerCase() === "yesterday") {
            dSumData_clone[1].sales = yesterdayMetrics[1];
        } else if (timePeriodSelection[1].toLocaleLowerCase() === "week") {
            dSumData_clone[1].sales = weekMetrics[1];
        } else {
            dSumData_clone[1].sales = monthMetrics[1];
        }

        if (timePeriodSelection[2].toLocaleLowerCase() === "yesterday") {
            dSumData_clone[2].sales = yesterdayMetrics[2];
        } else if (timePeriodSelection[2].toLocaleLowerCase() === "week") {
            dSumData_clone[2].sales = weekMetrics[2];
        } else {
            dSumData_clone[2].sales = monthMetrics[2];
        }

        setDSumData(dSumData_clone);
    }, [timePeriodSelection, yesterdayMetrics, weekMetrics, monthMetrics]);

   
    useEffect(() => {
        if (startDate && endDate) {
            GetAllMetricsOrders(startDate, endDate);
        }
    }, [GetAllMetricsOrders]);

    const today = moment();
    const [startDate, setStartDate] = useState("2022-01-01");
    const [endDate, setEndDate] = useState(today.format("MM/DD/YYYY"));

    const [datas, setDatas] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const fetchedData = await GetAllMetricsOrders(startDate, endDate);
        setDatas(fetchedData);
    };

    useEffect(() => {
        GetAllLeadsCompany();
    }, [GetAllLeadsCompany]);
    useEffect(() => {
        GetCompanyChart();
    }, [GetCompanyChart]);

    console.log(GetAllLeadsCompany);

    useEffect(() => {
        GetAllTopCustomers();
    }, [GetAllTopCustomers]);

    useEffect(() => {
        GetAllTopArea();
    }, [GetAllTopArea]);

    console.log(companyChart, "getCompanyChartFuc");

    //   {GetAllTopCustomers.map()}

    // console.log(state?.allMetricsOrder, "GetAllMetricsOrders")

    const bodyData = () => {
        return data?.products?.slice(0, 3)?.map((item, index) => {
            return (
                <tr key={index}>
                    <td>
                        <div className="row align-items-center">
                            <div className="col-sm-3">
                                <div className="productWrapper ">
                                    <img src={Product1} alt="" />{" "}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <span>{item?.productName}</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <span className="d-flex align-items-center h-100">
                            {item?.productSku}
                        </span>
                    </td>
                    <td>
                        {" "}
                        <div className="d-flex  align-items-center h-100">
                            <span
                                className={`border px-2 py-1 rounded small  text-white text-center ${checkStock(
                                    200
                                )}`}
                            >
                                {200} In Stock
                            </span>
                        </div>
                    </td>
                    <td>
                        {" "}
                        <div className="d-flex align-items-center h-100">
                            <span className="">NGN {item?.costPerUnit}</span>
                        </div>
                    </td>
                </tr>
            );
        });
    };
    // const topProductbodyData = () => {
    //     return mainreferenceData.map((item, index) => (
    //         <tr key={index}>
    //             <td>{item?.name}</td>
    //             <td>{item?.location}</td>
    //             <td>{item?.views}</td>
    //             <td>{item?.sales}</td>
    //             <td>{item?.conversion}</td>
    //             <td>{item?.total}</td>
    //         </tr>
    //     ));
    // };

    return (
        <AppLayout mode="light">
            <Style>
                <div className="container-fluid mb-5">
                    <div className="mb-5">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="color-2 text-capitalize">
                                Welcome back, {state?.data?.firstName}
                            </h5>

                            {/* <button
                                onClick={() => handleSuplierlink(state)}
                                className="btn bg-6 text-white font-weight-light  "
                            >
                                click to copy your Link
                            </button> */}
                        </div>
                        <div id="formdiv">
                            <form
                                id="sortform"
                                class=" mt-1 row "
                                onSubmit={handleSubmit}
                            >
                                <div class="col-auto">
                                    {/* <label  > Start Date</label> */}
                                    <input
                                        type="date"
                                        class="form-control border border-secondary mt-1"
                                        id="inpt"
                                        value={startDate}
                                        onChange={(e) =>
                                            setStartDate(e.target.value)
                                        }
                                    />
                                </div>
                                <div class=" col-auto">
                                    {/* <label >End Date</label> */}
                                    <input
                                        placeholder="today"
                                        type="date"
                                        class="form-control border-secondary col-auto border  mt-1"
                                        id="inpt"
                                        value={endDate}
                                        onChange={(e) =>
                                            setEndDate(e.target.value)
                                        }
                                    />
                                </div>

                                <div className=" col-auto">
                                    <button
                                        id="submitbtn"
                                        class="btn mt-1 bg-color-2 "
                                    >
                                        {" "}
                                        Filter{" "}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* Chart Module */}
                    <div>
                        <div className="mb-5">
                            <div className="row">
                                <div className="col-md-6 col-lg-4">
                                    <CardComp
                                        bodyText={
                                            <div>
                                                <div>
                                                    <div className="d-flex mt-3 align-items-center">
                                                        <div className="me-3">
                                                            <i className="iconWrapper">
                                                                <GiSwapBag className="h5 color-2 mb-0" />
                                                            </i>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-1">
                                                                {"NGN"}{" "}
                                                                {state
                                                                    ?.allMetricsOrder
                                                                    ?.total_orders_amount >
                                                                0 ? (
                                                                    <div>
                                                                        {" "}
                                                                        {formatMoney(
                                                                            state
                                                                                ?.allMetricsOrder
                                                                                ?.total_orders_amount
                                                                        )}
                                                                    </div>
                                                                ) : (
                                                                    <div>
                                                                        {" "}
                                                                        00.00{" "}
                                                                    </div>
                                                                )}
                                                            </h6>
                                                            <p className="mb-0 text-muted">
                                                                Total Sales
                                                                Orders
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    />
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <CardComp
                                        bodyText={
                                            <div>
                                                <div>
                                                    <div className="d-flex mt-3  align-items-center">
                                                        <div className="me-3">
                                                            <i className="iconWrapper">
                                                                <BsCart3 className="h5 color-2 mb-0" />
                                                            </i>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-1">
                                                                {/* {"NGN"}{" "} { formatMoney (state?.allMetricsOrder?.total_orders_amount - state?.allMetricsOrder?.pay_later_orders?.total_amount)} */}
                                                                {"NGN"}{" "}
                                                                {state
                                                                    ?.allMetricsOrder
                                                                    ?.total_orders_amount -
                                                                    state
                                                                        ?.allMetricsOrder
                                                                        ?.pay_later_orders
                                                                        ?.total_amount >
                                                                0 ? (
                                                                    <div>
                                                                        {" "}
                                                                        {formatMoney(
                                                                            state
                                                                                ?.allMetricsOrder
                                                                                ?.total_orders_amount -
                                                                                state
                                                                                    ?.allMetricsOrder
                                                                                    ?.pay_later_orders
                                                                                    ?.total_amount
                                                                        )}
                                                                    </div>
                                                                ) : (
                                                                    <div>
                                                                        {" "}
                                                                        00.00{" "}
                                                                    </div>
                                                                )}
                                                            </h6>
                                                            <p className="mb-0 text-muted">
                                                                Total Sales
                                                                Collections
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    />
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <CardComp
                                        bodyText={
                                            <div>
                                                <div>
                                                    <div className="d-flex mt-3  align-items-center">
                                                        <div className="me-3">
                                                            <i className="iconWrapper">
                                                                <SiMattermost className="h5 color-2 mb-0" />
                                                            </i>
                                                        </div>
                                                        <div>
                                                            <h6 className="mb-1">
                                                                {/* {"NGN"}{" "} { formatMoney (state?.allMetricsOrder?.pay_later_orders?.total_amount )} */}
                                                                {"NGN"}{" "}
                                                                {state
                                                                    ?.allMetricsOrder
                                                                    ?.pay_later_orders
                                                                    ?.total_amount >
                                                                0 ? (
                                                                    <div>
                                                                        {" "}
                                                                        {formatMoney(
                                                                            state
                                                                                ?.allMetricsOrder
                                                                                ?.pay_later_orders
                                                                                ?.total_amount
                                                                        )}
                                                                    </div>
                                                                ) : (
                                                                    <div>
                                                                        {" "}
                                                                        00.00{" "}
                                                                    </div>
                                                                )}
                                                            </h6>
                                                            <p className="mb-0 text-muted">
                                                                Total Debts
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        {/* <DashboardDataComp DashboardData={DashboardData} /> */}
                    </div>
                    {/*  */}
                    <div>
                        <Chart data={companyChart}/>
                    </div>
                    <div>
                        <MapandTopAreas topArea={state?.allTopArea?.areas} />
                    </div>
                    <div>
                        <TopCustomerAndTopProduct
                            id={2}
                            bodyData={bodyData}
                            data={data}
                            isLoading={productLoading}
                            topCustomer={state?.allTopCustomers?.customers}
                        />
                    </div>
                    <div>
                        <OrderComp
                            dataOrders={dataOrders}
                            setOrderData={setOrderData}
                            setShow={setShow}
                            setSupplierDetail={setSupplierDetail}
                        />
                    </div>
                </div>
            </Style>
            {/* Modal for Order  */}
            <OrderModal
                show={show}
                orderData={orderData}
                setShow={setShow}
                HeaderOrder={HeaderOrder}
                ProductColumn={ProductColumn}
                setDeclineModal={setDeclineModal}
                supplierDetail={supplierDetail}
                AcceptOrderFunc={AcceptOrderFunc}
            />
            {/* Modal for OrderProduct  */}
            <OrderProductModal
                declineModal={declineModal}
                setDeclineModal={setDeclineModal}
                setRejectReasonv={setRejectReason}
                setShow={setShow}
                RejectOrderFunc={RejectOrderFunc}
                supplierDetail={supplierDetail}
                rejectReason={rejectReason}
            />
        </AppLayout>
    );
};

const Style = styled.div`
    .homepage {
        padding-top: 7rem;
    }
    .start-by-registering {
        padding: 14em 8em;
    }
    .card {
        border-radius: 15px;
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.04);
        background-color: #fff;
    }
    .table {
        color: #4d4f5c;
    }
    .table thead th {
        font-size: 15px;
        font-weight: 500;
    }
    .Product td {
        height: 80px;
    }

    .productWrapper {
        width: 55px;
    }
    .iconwrapper {
        width: 35px;
        height: 35px;
        border: 1px solid #e8e7ff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        padding: 2px;
        margin-right: 10px;
        background: #e8e7ff;
    }

    #sortform {
        width: fit-content;
        margin-left: auto;
        /* border: 1rem;
        border-radius: 1rem; */
    }
    #inpt {
        border-radius: 1rem;
        border-color: black;
    }
    #submitbtn {
        background-color: #463c74;
        color: white;
        border-radius: 0.5rem;
    }
    #formdiv {
        margin-right: 3rem;
    }

    @media (max-width: 767px) {
        .homepage {
            padding-top: 14rem;
        }
        .registering-cta {
            left: 0;
        }

        #formdiv {
            padding: 1rem;
            margin-right: 0rem;
        }
    }
    @media (max-width: 480px) {
        .homepage {
            padding-top: 15rem;
        }
        .start-by-registering {
            padding: 12em 5em;
        }

        #formdiv {
            margin-right: 0rem;

            align-items: center;
        }

        #submitbtn {
            width: 100%;
            margin: 0 auto;
        }
    }
`;

export default HomePage;
