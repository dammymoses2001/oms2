import React from "react";

//import { useNavigate } from "react-router-dom";

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
    DashboardDataComp
} from "../../components";
import { useAuth } from "../../hooks";
import Product1 from "../../assets/images/product-1.png";

import {
    // mainreferenceData,
    // topProductHeader,
    checkStock,
    HeaderOrder,
    ProductColumn
} from "../../utils/datautils";

import { DashboardMetrics, getAllUserProduct, getOrder } from "../../services";
import { useState } from "react";

const HomePage = () => {
    const {
        state,
        AcceptOrderFunc,
        RejectOrderFunc
        // state: { data,dashboardMertics,MapMertics },
    } = useAuth();
    const [show, setShow] = useState(false);

    const [orderData, setOrderData] = useState(false);
    const [declineModal, setDeclineModal] = useState(false);
    const [supplierDetail, setSupplierDetail] = useState();
    const [rejectReason, setRejectReason] = useState("");
    const { data: dataOrders } = useQuery("get-orders", getOrder, {
        // refetchOnWindowFocus: true,
        // refetchInterval: 2000
        // refetchIntervalInBackground: true,
    });
    //console.log(dataOrders,'dataOrders')

    const { data } = useQuery("get-products", getAllUserProduct, {
        // refetchOnWindowFocus: true,
        // refetchInterval: 2000
        // refetchIntervalInBackground: true,
    });
    const { data: DashboardData } = useQuery(
        "dashboard-metric",
        DashboardMetrics,
        {
            // refetchOnWindowFocus: true,
            // refetchInterval: 2000
            // refetchIntervalInBackground: true,
        }
    );
    //console.log(DashboardData,'data')

    //console.log(getUserProductList?.products,'MapMertics')
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

    // console.log(state,'state')
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
                    </div>
                    {/* Chart Module */}
                    <div>
                        <DashboardDataComp DashboardData={DashboardData} />
                    </div>
                    {/*  */}
                    <div>
                        <Chart />
                    </div>
                    <div>
                        <MapandTopAreas />
                    </div>
                    <div>
                        <TopCustomerAndTopProduct
                            id={2}
                            bodyData={bodyData}
                            data={data}
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

    @media (max-width: 767px) {
        .homepage {
            padding-top: 14rem;
        }
        .registering-cta {
            left: 0;
        }
    }
    @media (max-width: 480px) {
        .homepage {
            padding-top: 15rem;
        }
        .start-by-registering {
            padding: 12em 5em;
        }
    }
`;

export default HomePage;
