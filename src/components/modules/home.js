import { FiCircle } from "react-icons/fi";
import {
    HiOutlineArrowNarrowDown,
    HiOutlineArrowNarrowUp
} from "react-icons/hi";
import { RiUserAddLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import {
    HeaderOrder,
    SortOrder,
    topProductHeader
} from "../../utils/datautils";
import { CardComp } from "../cardComp";
import { SimpleLineChart } from "../Charts";
import { Loading } from "../Loading";
import SimpleMap1 from "../map/Map";
import { TableCompData } from "../Table";
import { TableComp } from "../TableComp";
import { TopNav } from "../TopNav";
const locations = require("../../components/map/location.json"); 

export const DashboardDataComp = ({ DashboardData }) => {
    return (
        <div className="mb-4">
            <div className="row">
                <div className="col-md-6 col-lg-4 mb-3">
                    <CardComp
                        bodyText={
                            <div>
                                <TopNav
                                    TextComp={
                                        <span className="fw-1">Top View</span>
                                    }
                                    DropDownText={
                                        <span>
                                            <span className=""></span>
                                            Month
                                        </span>
                                    }
                                />
                                <div>
                                    <div>
                                        <div>
                                            <h4>246K</h4>
                                            <p className="d-flex align-items-center mb-0">
                                                <span>
                                                    <HiOutlineArrowNarrowDown
                                                        className="text-danger"
                                                        size={18}
                                                    />
                                                </span>
                                                13.8%
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    />
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                    <CardComp
                        bodyText={
                            <div>
                                <TopNav
                                    TextComp={
                                        <span className="fw-1 text-muted">
                                            Product Sold
                                        </span>
                                    }
                                    DropDownText={
                                        <span>
                                            <span className=""></span>
                                            Month
                                        </span>
                                    }
                                />
                                <div>
                                    <div>
                                        <div>
                                            <h4>
                                                NGN{" "}
                                                {DashboardData?.data
                                                    ?.totalProductsSold || 0}
                                            </h4>
                                            <p className="d-flex align-items-center mb-0">
                                                <span>
                                                    <HiOutlineArrowNarrowUp
                                                        className="text-success"
                                                        size={18}
                                                    />
                                                </span>
                                                13.8%
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    />
                </div>
                <div className=" col-md-6 col-lg-4 mb-3">
                    <CardComp
                        bodyText={
                            <div>
                                <TopNav
                                    TextComp={
                                        <span className="fw-1 text-muted">
                                            {" "}
                                            Total Earnings
                                        </span>
                                    }
                                    DropDownText={
                                        <span>
                                            <span className=""></span>
                                            Month
                                        </span>
                                    }
                                />
                                <div>
                                    <div>
                                        <div>
                                            <h4>
                                                NGN{" "}
                                                {DashboardData?.data
                                                    ?.totalAmountEarned || 0}
                                            </h4>
                                            <p className="d-flex align-items-center mb-0">
                                                <span>
                                                    <HiOutlineArrowNarrowDown
                                                        className="text-danger"
                                                        size={18}
                                                    />
                                                </span>
                                                13.8%
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
    );
};

export const Chart = () => {
    return (
        <div className="mb-4">
            <CardComp
                bodyText={
                    <div>
                        <div className="mb-5">
                            <TopNav
                                TextComp={"Statistics"}
                                DropDownText={
                                    <span>
                                        <span className=""></span>
                                        Month
                                    </span>
                                }
                            />
                        </div>
                        <div>
                            <SimpleLineChart />
                        </div>
                    </div>
                }
            />
        </div>
    );
};

export const MapandTopAreas = () => {
    return (
        <div>
            <div className="row ">
                <div className="col-lg-8 ">
                    <div className="mb-4 ">
                        <CardComp
                            bodyText={
                                <div>
                                    <SimpleMap1 locations={locations} />
                                </div>
                                // <div>
                                //     <div className="mb-3">
                                //         <TopNav
                                //             TextComp={
                                //                 "Top Representatives"
                                //             }
                                //             DropDownText={
                                //                 <span>
                                //                     <span className=""></span>
                                //                     Month
                                //                 </span>
                                //             }
                                //         />
                                //     </div>
                                //     <div className="mb-5">
                                //         <TableComp
                                //             TableHeader={
                                //                 refererHeaderData
                                //             }
                                //             TableBodyData={
                                //                 topProductbodyData
                                //             }
                                //             data={mainreferenceData}
                                //         />
                                //     </div>
                                //     <div>
                                //         {" "}
                                //         <h6 className="text-center">
                                //             See More
                                //         </h6>
                                //     </div>
                                // </div>
                            }
                        />
                    </div>
                </div>
                <div className="col-lg-4  mb-4  ">
                    <CardComp
                        bodyText={
                            <div>
                                <TopNav
                                    TextComp={"Top Areas"}
                                    DropDownText={
                                        <span>
                                            <span className=""></span>
                                            Month
                                        </span>
                                    }
                                />
                                {/* <div className="mb-3"><SVGOverlayExample/></div> */}
                                <div className="mt-4">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <div className="d-flex align-items-center">
                                            <FiCircle
                                                className="me-2"
                                                color="#a3a1fb"
                                            />{" "}
                                            <p className="mb-0">Agege</p>
                                        </div>{" "}
                                        <div>
                                            <p className="mb-0">NGN 300,000</p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <div className="d-flex align-items-center">
                                            <FiCircle
                                                className="me-2"
                                                color="#a3a1fb"
                                            />{" "}
                                            <p className="mb-0">Apapa</p>
                                        </div>{" "}
                                        <div>
                                            <p className="mb-0">NGN 300,000</p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <div className="d-flex align-items-center">
                                            <FiCircle
                                                className="me-2"
                                                color="#a3a1fb"
                                            />{" "}
                                            <p className="mb-0">Ikorodu</p>
                                        </div>{" "}
                                        <div>
                                            <p className="mb-0">NGN 300,000</p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <div className="d-flex align-items-center">
                                            <FiCircle
                                                className="me-2"
                                                color="#a3a1fb"
                                            />{" "}
                                            <p className="mb-0">Lagos-Island</p>
                                        </div>{" "}
                                        <div>
                                            <p className="mb-0">NGN 300,000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export const TopCustomerAndTopProduct = ({ bodyData, data ,isLoading}) => {
  
    return (
        <div className="mb-4">
            <div className="row">
                <div className="col-lg-8 mb-4 mb-md-0">
                    <CardComp
                        bodyText={
                            <>
                                <div className="mb-3">
                                    <TopNav
                                        TextComp={"Top Products"}
                                        DropDownText={
                                            <span>
                                                <span className=""></span>
                                                Month
                                            </span>
                                        }
                                        // RightComp={<Link className="text-1 p" to='/product/all'>Show More</Link>}
                                        // DropDownText="Show More"
                                    />
                                </div>
                                <div className="mb-5 Product">
                                    {isLoading?<Loading height={'30vh'}/> :
                                    <TableCompData
                                    marginBottom={'0px'}
                                    columns={topProductHeader}
                                        // TableHeader={topProductHeader}
                                        // TableBodyData={bodyData}
                                        data={data?.length>0?data?.slice(undefined,4):[]}
                                    />
                        }
                                    <div className="text-center text-black mt-3">
                                        <Link
                                            to="/product/all"
                                            className="text-black"
                                        >
                                            See More
                                        </Link>
                                    </div>
                                </div>
                            </>
                        }
                    />
                </div>
                <div className="col-lg-4 ">
                    <CardComp
                        bodyText={
                            <div>
                                <TopNav
                                    TextComp={"Top Customers"}
                                    DropDownText={
                                        <span>
                                            <span className=""></span>
                                            Month
                                        </span>
                                    }
                                />
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
        </div>
    );
};

export const OrderComp = ({
    setOrderData,
    setShow,
    setSupplierDetail,
    dataOrders
}) => {
    return (
        <div>
            <CardComp
                bodyText={
                    <div>
                        <div className="my-3">
                            <TopNav
                                TextComp={<h5>Transaction Activities</h5>}
                                DropDownText={
                                    <span>
                                        <span className=""></span>
                                        Month
                                    </span>
                                }
                            />
                        </div>
                        <div className="mb-5">
                            <TableCompData
                                columns={HeaderOrder(
                                    setOrderData,
                                    setShow,
                                    setSupplierDetail,
                                    dataOrders
                                )}
                                data={SortOrder(dataOrders?.order || [])?.slice(
                                    0,
                                    4
                                )}
                                pagination
                            />
                        </div>
                    </div>
                }
            />
        </div>
    );
};
