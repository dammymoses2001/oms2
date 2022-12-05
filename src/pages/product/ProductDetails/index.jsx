import React, { useEffect } from "react";
import {
    AppLayout,
    CardComp,
    Loading,
    TableComp,
    TopNav
} from "../../../components";
import { BiPlus } from "react-icons/bi";
import Product1 from "../../../assets/images/product-1.png";
import { RiUserAddLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import {
    checkStock,
    ProductData,
    topProductHeader
} from "../../../utils/datautils";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks";
import { Search } from "@material-ui/icons";

export const ProductDetails = () => {
    const { state, getAllUserProductFunc, getUserProductList } = useAuth();
    console.log(getUserProductList,'state')
    useEffect(() => {
        getAllUserProductFunc(state?.data?._id);
    }, [getAllUserProductFunc, state?.data?._id]);

    useEffect(() => {
        getAllUserProductFunc();
    }, [getAllUserProductFunc]);

    // console.log(products,'getUserProductList')
    const bodyData = () => {
        return getUserProductList?.products?.slice(0, 3)?.map((item, index) => {
            // if(index<=4){
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
            // }
            // return null
        });
    };
    // const topProductbodyData = () => {
    //     return mainreferenceData.map((item, index) => (
    //         <tr key={index}>
    //             <td>{item?.location}</td>
    //             <td>{item?.views}</td>
    //             <td>{item?.sales}</td>
    //             <td>{item?.conversion}</td>
    //             <td>{item?.total}</td>
    //         </tr>
    //     ));
    // };
    //   console.log(getUserProductList,'getUserProductList')
    return (
        <AppLayout mode="light">
            <Style>
                 
                <div className="mb-3">
                    <TopNav
                        TextComp={<span className="color-1 h4">Products</span>}
                        RightComp={
                            <div className="color-2">
                                <Link
                                    to="/product/all"
                                    className="me-2 btn bg-1 h6"
                                >
                                    <span className="me-1"></span>View Product
                                </Link>
                                <Link
                                    to="/product/addproduct"
                                    className="me-2 btn bg-1 h6"
                                >
                                    <span className="mr-1">
                                        <BiPlus />
                                    </span>
                                    Add Product
                                </Link>
                            </div>
                        }
                    />
                </div>
                <div className="mb-5">
                    <div className="row">
                        {ProductData.map((item, index) => (
                            <div key={index} className="col-md-6 col-lg-4">
                                <CardComp
                                    bodyText={
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-3">
                                                        <i className="iconWrapper">
                                                            {item?.icon}
                                                        </i>
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-1">
                                                            NGN {item?.sales}
                                                        </h6>
                                                        <p className="mb-0 text-muted">
                                                            {item?.title}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <i className="h5">
                                                    <BsThreeDots />
                                                </i>
                                            </div>
                                        </div>
                                    }
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="row mb-5">
                        <div className="col-lg-8 mb-4 mb-md-0">
                            <CardComp
                                bodyText={
                                    <>
                                        <div className="mb-3">
                                            <TopNav
                                                TextComp={"Top Products"}
                                                RightComp={
                                                    <Link
                                                        to="/product/all"
                                                        className="btn text-1 p"
                                                    >
                                                        Show More
                                                    </Link>
                                                }
                                                // DropDownText="Show More"
                                            />
                                        </div>
                                        <div className="mb-5 Product">
                                            {!state?.isLoading &&
                                            getUserProductList?.products ? (
                                                <TableComp
                                                    TableHeader={
                                                        topProductHeader
                                                    }
                                                    TableBodyData={bodyData}
                                                    loading={getUserProductList}
                                                    data={
                                                        getUserProductList?.products
                                                    }
                                                    emptyText={
                                                        "No product Available"
                                                    }
                                                />
                                            ) : (
                                                <Loading height={"30vh"} />
                                            )}
                                        </div>
                                    </>
                                }
                            />
                        </div>
                        <div className="col-lg-4 ">
                            <CardComp
                                bodyText={
                                    <div>
                                        <TopNav TextComp={"Quick Details"} />
                                        <hr />
                                        {/* <div className="mb-3"><SVGOverlayExample/></div> */}
                                        <div>
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <div className="d-flex align-items-center">
                                                    <div className="iconwrapper">
                                                        <RiUserAddLine
                                                            className=""
                                                            color="#8280ff"
                                                        />{" "}
                                                    </div>
                                                    <p
                                                        className="mb-0 text-muted"
                                                        style={{
                                                            color: "#4d4f5c"
                                                        }}
                                                    >
                                                        Last 24 Hours
                                                    </p>
                                                </div>{" "}
                                                <div>
                                                    <p className="mb-0">
                                                        290 new customers
                                                    </p>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <div className="d-flex align-items-center">
                                                    <div className="iconwrapper">
                                                        <RiUserAddLine
                                                            className=""
                                                            color="#8280ff"
                                                        />{" "}
                                                    </div>
                                                    <p
                                                        className="mb-0 text-muted"
                                                        style={{
                                                            color: "#4d4f5c"
                                                        }}
                                                    >
                                                        Last 24 Hours
                                                    </p>
                                                </div>{" "}
                                                <div>
                                                    <p className="mb-0">
                                                        290 new customers
                                                    </p>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <div className="d-flex align-items-center">
                                                    <div className="iconwrapper">
                                                        <RiUserAddLine
                                                            className=""
                                                            color="#8280ff"
                                                        />{" "}
                                                    </div>
                                                    <p
                                                        className="mb-0 text-muted"
                                                        style={{
                                                            color: "#4d4f5c"
                                                        }}
                                                    >
                                                        Last 24 Hours
                                                    </p>
                                                </div>{" "}
                                                <div>
                                                    <p className="mb-0">
                                                        290 new customers
                                                    </p>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <div className="d-flex align-items-center">
                                                    <div className="iconwrapper">
                                                        <RiUserAddLine
                                                            className=""
                                                            color="#8280ff"
                                                        />{" "}
                                                    </div>
                                                    <p
                                                        className="mb-0 text-muted"
                                                        style={{
                                                            color: "#4d4f5c"
                                                        }}
                                                    >
                                                        Last 24 Hours
                                                    </p>
                                                </div>{" "}
                                                <div>
                                                    <p className="mb-0">
                                                        290 new customers
                                                    </p>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <div className="d-flex align-items-center">
                                                    <div className="iconwrapper">
                                                        <RiUserAddLine
                                                            className=""
                                                            color="#8280ff"
                                                        />{" "}
                                                    </div>
                                                    <p
                                                        className="mb-0 text-muted"
                                                        style={{
                                                            color: "#4d4f5c"
                                                        }}
                                                    >
                                                        Last 24 Hours
                                                    </p>
                                                </div>{" "}
                                                <div>
                                                    <p className="mb-0">
                                                        290 new customers
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            />
                        </div>
                    </div>

                    {/* <div className="row">
                            <div className="col-12">
                              <CardComp bodyText={
                                  <div className="py-5">
                                        <BarChartComp/>
                                  </div>
                              }/>
                            </div>
                        </div> */}
                </div>
            </Style>
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
        font-size: 12px;
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
