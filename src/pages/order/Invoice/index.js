import React, { useEffect } from "react";
import { AppLayout, TableComp, TopNav } from "../../../components";

import { InvoiceDataDumy, InvoiceHeaderData } from "../../../utils/datautils";
import styled from "styled-components";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../hooks";
import { Loading } from "../../../components/Loading";
import { formatMoney } from "../../../utils";
import moment from "moment";
import toast from "react-hot-toast";

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

export const Invoice = () => {
    const navigate =useNavigate()
    const {
        state,

        getInvoiceFunc,
        getProfileData
        // getOrderInvoiceFunc
    } = useAuth();
    const params = useParams();
    const { id } = params;
     console.log(id,'getInvoiceFunc')

    useEffect(() => {
        if(id ==='undefined'){
             toast.error('Oops, Something went wrong....')
             return navigate('/order/all')
         }
        if (id) {return getInvoiceFunc(id)}else{return toast.error('Oops, Something went wrong....')}
    }, [getInvoiceFunc, id,navigate]);

    // if(!supplierProduct.suppilersdetails?.id) navigate("/");
    if (state.isLoading)
        return (
            <div>
                <Loading />
            </div>
        );
     //console.log(state, "getInvoiceFunc");

    const InvoiceBodyData = () => {
        if (state?.invoice?.products.length > 0) {
            return state?.invoice?.products?.map((item, index) => (
                <tr key={index} className="text-muted">
                    {/* <td><span>{index+1}</span></td> */}
                    <td>
                        <div className="">
                            <div className="col-sm-12 p">
                                <span className="text-uppercase">
                                    {item?.product?.productName}
                                </span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="">
                            <div className="col-sm-12">
                                <span>{item?.product?.composition}</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="row align-items-center">
                            <div className="col-sm-12">
                                <span>{item?.quantity}</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="row align-items-center">
                            <div className="col-sm-12">
                                <span>{formatMoney(item?.price)}</span>
                            </div>
                        </div>
                    </td>
                </tr>
            ));
        } else {
            return InvoiceDataDumy?.map((item, index) => (
                <tr key={index} className="text-muted">
                    {/* <td><span>{index+1}</span></td> */}
                    <td>
                        <div className="">
                            <div className="col-sm-12 p">
                                <span>Augmentin</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="">
                            <div className="col-sm-12">
                                <span>
                                    Lorem ipsum dolor sit amet Consecteur
                                </span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="row align-items-center">
                            <div className="col-sm-12">
                                <span>{item?.quantity}</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="row align-items-center">
                            <div className="col-sm-12">
                                <span>{formatMoney(item?.price)}</span>
                            </div>
                        </div>
                    </td>
                </tr>
            ));
        }
    };

    return (
        <AppLayout mode="light">
            <Style>
                <div className="mb-3">
                    <TopNav
                        TextComp={<h4 className="color-1 h4 fw-2">Invoice</h4>}
                        RightComp={
                            <div className="color-2">
                                {/* <button className="mr-2 bg bg-1 h6" >View All Products</button> */}
                                <Link
                                    to="#"
                                    className="me-3 btn bg-6 text-white px-4 h6"
                                >
                                    Print
                                </Link>
                                <Link
                                    to="#"
                                    className="me-3 btn bg-7 text-white h6"
                                >
                                    Submit
                                </Link>
                                <Link to="#" className="me-3 btn bg-1 h6">
                                    Edit Invoice
                                </Link>
                                <Link to="#" className="mr-2 btn bg-1 h6">
                                    Delete Invoice
                                </Link>
                            </div>
                        }
                    />
                </div>

                <div className="px-5 shadow bg-white pt-5 pb-4  ">
                    <div className="d-flex justify-content-between mb-3">
                        <h2 className="fw-1 color-1">Company LOGO</h2>
                        <h3 className="color-1 fw-1">Invoice</h3>
                    </div>
                    <div className="color-1 ">
                        <p className="mb-1">
                            {getProfileData?.user?.supplierInformation &&
                                getProfileData?.user?.supplierInformation[0]
                                    ?.supplierName}
                        </p>
                        <p> {getProfileData?.user?.email}</p>
                    </div>
                    {/* <TableComp
                        TableHeader={OrderHeader}
                        TableBodyData={bodyData}
                        loading={getUserProductList}
                        data={state?.orders}
                    /> */}
                    <hr className="my-5" />
                    <div className="d-flex flex-wrap justify-content-between mb-5">
                        <div className="mb-3">
                            <p className="mb-2 fw-bold"> Invoice to</p>
                            <p className="mb-2 text-capitalize">
                                {getProfileData?.user?.supplierInformation &&
                                    getProfileData?.user?.supplierInformation[0]
                                        ?.supplierName}
                            </p>
                            <p className="mb-2">795 Folsom Ave,Suite 600</p>
                            <p className="mb-2">Lagos,Ng 94107</p>
                        </div>
                        <div>
                            <h6 className="mb-2 fw-bold">
                                {" "}
                                Order Date:{" "}
                                <span className="fw-1">
                                    {moment(
                                        state?.invoice?.order?.createdAt
                                    ).format("MMM Do YYYY")}
                                </span>
                            </h6>
                            <h6 className="mb-2 fw-bold">
                                Order Status:{" "}
                                <span className="fw-1">
                                    {state?.invoice?.status}
                                </span>
                            </h6>
                            <h6 className="mb-2 fw-bold">
                                {" "}
                                Order ID:{" "}
                                <span className="fw-1">
                                    {state?.invoice?.subOrderTrackingId}
                                </span>
                            </h6>
                        </div>
                    </div>

                    <div className="mb-7">
                        {!state?.isLoading && state?.invoice?.products ? (
                            <TableComp
                                TableHeader={InvoiceHeaderData}
                                TableBodyData={InvoiceBodyData}
                                loading={state?.isLoading}
                                data={state?.invoice?.products}
                            />
                        ) : (
                            <Loading height={"40vh"} />
                        )}
                        {/* <TableComp
                            TableHeader={InvoiceHeaderData}
                            TableBodyData={InvoiceBodyData}
                            loading={getUserProductList}
                            data={state?.orders}
                        /> */}
                    </div>
                    <div className="text-end">
                        <h6 className="mb-1 fw-bold">
                            {" "}
                            Sub-total:{" "}
                            <span className="fw-1">
                                {formatMoney(state?.invoice?.subTotal)}
                            </span>
                        </h6>
                        <h6 className="mb-1 fw-bold">
                            {" "}
                            Discout: <span className="fw-1">00.0%</span>
                        </h6>
                        <h6 className="mb-1 fw-bold mb-5">
                            {" "}
                            VAT <span className="fw-1">00.0%</span>
                        </h6>

                        <h2 className="fw-bold">
                            NGN{" "}
                            {state?.invoice?.products.length > 0
                                ? formatMoney(state?.invoice?.subTotal)
                                : "3,000:00"}
                        </h2>
                    </div>
                </div>
            </Style>
        </AppLayout>
    );
};
