import React, { useEffect, useState } from "react";
import {
    AppLayout,
    Loading,
    OrderModal,
    OrderProductModal,
    TableCompData,
    TopNav
} from "../../../components";
import { useQuery } from "react-query";
import { CSVLink, CSVDownload } from "react-csv";
import moment from "moment";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks";
import { BiConversation, BiSearchAlt } from "react-icons/bi";

import { formatMoney } from "../../../utils";

import { getOrder } from "../../../services";

import {
    handleCSvData,
    HeaderOrder,
    ProductColumn,
    SortOrder
} from "../../../utils/datautils";
import { ProductModal } from "../../../components/modules/productComp";
import ExportExcel from "./excelexport";

export const SalesReport = () => {
    const [show, setShow] = useState(false);
    const [showProduct, setShowProduct] = useState(false);
    const [orderData, setOrderData] = useState(false);
    const [productData, setProductData] = useState(false);
    const [declineModal, setDeclineModal] = useState(false);
    const [supplierDetail, setSupplierDetail] = useState();
    const [rejectReason, setRejectReason] = useState("");
    const {
        state,
        getAllUserProductFunc,
        AcceptOrderFunc,
        RejectOrderFunc,
        state: { check }
    } = useAuth();

    const [total, setTotal] = useState(0);
    const [orderReport, setOrderReport] = useState([]);

    useEffect(() => {
        if (check) {
            setOrderData(false);
            setDeclineModal(false);
        }
    }, [check]);

    const { data: dataOrders, isLoading } = useQuery("get-orders", getOrder, {
        // refetchOnWindowFocus: true,
        // refetchInterval: 2000
        // refetchIntervalInBackground: true,
    });

    const [query, setQuery] = useState("");

    const search = (orderData) => {
        return orderData?.filter(
            (row) =>
                row?.customer?.businessName.toLowerCase().includes(query) ||
                row?.user?.firstName.toLowerCase().includes(query) ||
                moment(row?.createdAt)
                    .format("MMM Do YY")
                    .toLowerCase()
                    .includes(query)
        );
    };

    // Prepare the sales report to be written in the .xlsx file.
    useEffect(() => {
        if (dataOrders?.order?.length > 0) {
            let totalAmount = dataOrders.order
                .map((o) => o.total)
                .reduce((a, b) => parseFloat(a) + parseFloat(b), 0);

            setTotal(totalAmount);

            const _orderReport = SortOrder(dataOrders?.order || []).map(
                (o, idx) => {
                    return {
                        "No.": idx + 1,
                        "Order Date": moment(o.createdAt).format("MMM Do, YY"),
                        "Field Staff": `${o.user?.firstName} ${o?.user?.lastName}`,
                        Customer: `${o?.customer?.businessName || "-"}`,
                        "Payment Method": `${
                            o?.payments[0]?.paymentMethod || "N/A"
                        }`,
                        "Payment Status": `${o?.paymentStatus || "N/A"}`,
                        Product: `${o?.orderItems[0]?.product?.productName}`,
                        "Prod Qty": o?.orderItems[0]?.quantity,
                        "Amount (₦)": formatMoney(o.total)
                    };
                }
            );

            setOrderReport(_orderReport);
        }
    }, [dataOrders]);

    useEffect(() => {
        getAllUserProductFunc(state?.data?._id);
    }, [getAllUserProductFunc, state?.data?._id]);

    const headers = [
        { label: "Field Staff", key: "Field Staff" },
        { label: "", key: "" },
        { label: "Customer", key: "Customer" },
        { label: "", key: "" },
        { label: "Prod. Qty", key: "Prod. Qty" },
        { label: "Address", key: "Address" },
        { label: "", key: "" },
        { label: "", key: "" },
        { label: "Status", key: "Status" },
        { label: "", key: "" },
        { label: "Payment Method", key: "Payment Method" },
        { label: "", key: "" },
        { label: "Payment Status", key: "Payment Status" },
        { label: "", key: "" },
        { label: "Amount", key: "Amount" },
        { label: "", key: "" },
        { label: "Order Date", key: "Order Date" }
    ];

    // useEffect(() => {
    //     getAllUserOrderFunc();
    // }, [getAllUserOrderFunc]);

    return (
        <AppLayout mode="light">
            <Style>
                {/* {console.log(SortOrder())} */}

                <div className="d-flex align-items-center search px-1 ">
                    <BiSearchAlt size={20} className="me-2" />
                    <input
                        id="search"
                        placeholder="Search FieldStaff, Customer, & Due Dates"
                        className="px-1 py-2 text-black"
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>

                <div className="mb-3 mt-2">
                    <TopNav
                        TextComp={
                            <h5 className="color-1 fw-2">Sales Report</h5>
                        }
                        RightComp={
                            <div className="color-2">
                                {/* <button className="mr-2 bg bg-1 h6" >View All Products</button> */}
                                {/* <CSVLink data={SortOrder(dataOrders)}>Download me</CSVLink>; */}

                                <ExportExcel
                                    excelData={orderReport}
                                    fileName={"Sales_Report"}
                                />

                                {/* <Link to="#" className="mr-2 btn bg-1 h6">
                                    Export
                                </Link> */}
                            </div>
                        }
                    />
                </div>

                <div className="px-3 px-md-5 shadow bg-white pt-4 height-80">
                    {isLoading ? (
                        <Loading height={"50vh"} />
                    ) : (
                        <>
                            <TableCompData
                                columns={HeaderOrder(
                                    setOrderData,
                                    setShow,
                                    setSupplierDetail,
                                    dataOrders,
                                    setProductData,
                                    setShowProduct,
                                    true
                                )}
                                data={search(
                                    SortOrder(dataOrders?.order || [])
                                )}
                                pagination
                            />
                            <div
                                className="text-end"
                                style={{
                                    marginTop: "20px",
                                    marginRight: "150px",
                                    paddingBottom: "40px"
                                }}
                            >
                                <span className="px-2">Total: </span>
                                <span className="bg-8 me-4 px-2">
                                    ₦{formatMoney(total)}
                                </span>
                            </div>
                        </>
                    )}
                </div>
            </Style>

            {show && (
                <>
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
                        setRejectReason={setRejectReason}
                        setShow={setShow}
                        RejectOrderFunc={RejectOrderFunc}
                        supplierDetail={supplierDetail}
                        rejectReason={rejectReason}
                    />
                </>
            )}

            {showProduct && (
                <ProductModal
                    show={showProduct}
                    productData={productData}
                    setShow={setShowProduct}
                    HeaderOrder={HeaderOrder}
                    ProductColumn={ProductColumn}
                    setDeclineModal={setDeclineModal}
                    supplierDetail={supplierDetail}
                    AcceptOrderFunc={AcceptOrderFunc}
                />
            )}
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
    }
    td {
        height: 40px;
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
    .dropdown-toggle::after {
        display: none !important;
    }

    input {
        border: none;
        outline: none;
        background: transparent;
        color: black;
        text: center;
        width: 90%;
    }

    .search {
        border-style: solid;
        background-color: white;
        margin: auto;
        width: 50%;
        border-width: 0.5px;
        border-radius: 15px;
        border-color: #f0f2f8;
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
