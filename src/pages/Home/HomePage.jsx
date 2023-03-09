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

import { DashboardMetrics, getAllUserProduct, getMetricsOrders, getOrder } from "../../services";
import { useState } from "react";
import { BsCart3, BsThreeDots } from "react-icons/bs";
import { GiSwapBag } from "react-icons/gi";
import { FiTrendingUp } from "react-icons/fi";
import {SiMattermost} from "react-icons/si"

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
        GetAllMetricsOrders
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

    const { data,isLoading:productLoading } = useQuery("get-products", getAllUserProduct);

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

    // useEffect(() => {
    //     if (dataOrders && dataOrders.hasOwnProperty("order")) {
    //         let now = new Date();

    //         // Yesterday metrics

    //         const y1 = new Date(now.valueOf() - 1000 * 60 * 60 * 24);
    //         const y2 = new Date(now.valueOf() - 1000 * 60 * 60 * 24 * 2);

    //         const [y_year1, y_year2] = [y1.getFullYear(), y2.getFullYear()];
    //         const [y_month1, y_month2] = [y1.getMonth() + 1, y2.getMonth() + 1];
    //         const [y_date1, y_date2] = [y1.getDate(), y2.getDate()];

    //         // 1 day ago
    //         const y_metrics1 = dataOrders?.order?.filter(function (o) {
    //             let o_date = moment(o.createdAt).format("YYYY-M-D");
    //             let o_date_arr = o_date.split("-");

    //             return (
    //                 parseInt(o_date_arr[0]) === y_year1 &&
    //                 parseInt(o_date_arr[1] === y_month1) &&
    //                 parseInt(o_date_arr[2] === y_date1)
    //             );
    //         });

    //         // 2 days ago
    //         const y_metrics2 = dataOrders?.order?.filter(function (o) {
    //             let o_date = moment(o.createdAt).format("YYYY-M-D");
    //             let o_date_arr = o_date.split("-");

    //             return (
    //                 parseInt(o_date_arr[0]) === y_year2 &&
    //                 parseInt(o_date_arr[1] === y_month2) &&
    //                 parseInt(o_date_arr[2] === y_date2)
    //             );
    //         });

    //         let y_totalSales1 = y_metrics1
    //             .map((o) => o.total)
    //             .reduce((a, b) => parseFloat(a) + parseFloat(b), 0);

    //         let y_totalSales2 = y_metrics2
    //             .map((o) => o.total)
    //             .reduce((a, b) => parseFloat(a) + parseFloat(b), 0);

    //         let y_collected_metrics = y_metrics1.filter(
    //             (o) => o?.PaymentStatus?.toLowerCase() === "paid"
    //         );

    //         let y_collected = y_collected_metrics
    //             .map((o) => o.total)
    //             .reduce((a, b) => parseFloat(a) + parseFloat(b), 0);

    //         let y_growth =
    //             ((y_totalSales1 - y_totalSales2) / y_totalSales2) * 100 || 0;

    //         setYesterdayMetrics([
    //             formatMoney(y_totalSales1) || "0.00",
    //             formatMoney(y_collected) || "0.00",
    //             to2DecPlaces(y_growth) + "%"
    //         ]);
    //     }
    // }, [dataOrders]);

    // useEffect(() => {
    //     if (dataOrders && dataOrders.hasOwnProperty("order")) {
    //         let now = new Date();

    //         // Last week metrics

    //         let w1, w2, w3, w4;

    //         let currDay = now.getDay();

    //         // If the day is not the first day of the week, that is `0` - Sunday.
    //         if (currDay > 0) {
    //             w1 = new Date(now.valueOf());
    //             w2 = new Date(now.valueOf() - 1000 * 60 * 60 * 24 * currDay);
    //         } else {
    //             w1 = w2 = Date(now.valueOf());
    //         }

    //         // New Date from previous week before last week
    //         w3 = new Date(w2.valueOf() - 1000 * 60 * 60 * 24 * 1);
    //         w4 = new Date(w2.valueOf() - 1000 * 60 * 60 * 24 * 7);

    //         const [w_year1, w_year2] = [w1.getFullYear(), w2.getFullYear()];
    //         const [w_month1, w_month2] = [w1.getMonth() + 1, w2.getMonth() + 1];
    //         const [w_date1, w_date2] = [w1.getDate(), w2.getDate()];

    //         const [w_year3, w_year4] = [w3.getFullYear(), w4.getFullYear()];
    //         const [w_month3, w_month4] = [w3.getMonth() + 1, w4.getMonth() + 1];
    //         const [w_date3, w_date4] = [w3.getDate(), w4.getDate()];

    //         // Current week
    //         const w_metrics1 = dataOrders?.order?.filter(function (o) {
    //             let o_date = moment(o.createdAt).format("YYYY-M-D");
    //             let o_date_arr = o_date.split("-");

    //             let o_y = parseInt(o_date_arr[0]);
    //             let o_m = parseInt(o_date_arr[1]);
    //             let o_d = parseInt(o_date_arr[2]);

    //             return (
    //                 o_y >= w_year2 &&
    //                 o_y <= w_year1 &&
    //                 o_m >= w_month2 &&
    //                 o_m <= w_month1 &&
    //                 o_d >= w_date2 &&
    //                 o_d <= w_date1
    //             );
    //         });

    //         // Last week
    //         const w_metrics2 = dataOrders?.order?.filter(function (o) {
    //             let o_date = moment(o.createdAt).format("YYYY-M-D");
    //             let o_date_arr = o_date.split("-");

    //             let o_y = parseInt(o_date_arr[0]);
    //             let o_m = parseInt(o_date_arr[1]);
    //             let o_d = parseInt(o_date_arr[2]);

    //             return (
    //                 o_y >= w_year4 &&
    //                 o_y <= w_year3 &&
    //                 o_m >= w_month4 &&
    //                 o_m <= w_month3 &&
    //                 o_d >= w_date4 &&
    //                 o_d <= w_date3
    //             );
    //         });

    //         let w_totalSales1 = w_metrics1
    //             .map((o) => o.total)
    //             .reduce((a, b) => parseFloat(a) + parseFloat(b), 0);

    //         let w_totalSales2 = w_metrics2
    //             .map((o) => o.total)
    //             .reduce((a, b) => parseFloat(a) + parseFloat(b), 0);

    //         let w_growth =
    //             ((w_totalSales1 - w_totalSales2) / w_totalSales2) * 100 || 0;

    //         let w_collected_metrics = w_metrics1.filter(
    //             (o) => o?.PaymentStatus?.toLowerCase() === "paid"
    //         );

    //         console.log("w_metrics", w_metrics1, w_metrics2);

    //         let w_collected = w_collected_metrics
    //             .map((o) => o.total)
    //             .reduce((a, b) => parseFloat(a) + parseFloat(b), 0);

    //         setWeekMetrics([
    //             formatMoney(w_totalSales1) || "0.00",
    //             formatMoney(w_collected) || "0.00",
    //             to2DecPlaces(w_growth) + "%"
    //         ]);
    //     }
    // }, [dataOrders]);

    // useEffect(() => {
    //     if (dataOrders && dataOrders.hasOwnProperty("order")) {
    //         let now = new Date();

    //         // Last week metrics

    //         let m1, m2, m3, m4;

    //         let currDate = now.getDate();

    //         // If the day is not the first day of the month.
    //         // `currDate - 1` because it is not zero-offset.
    //         if (currDate > 0) {
    //             m1 = new Date(now.valueOf());
    //             m2 = new Date(
    //                 now.valueOf() - 1000 * 60 * 60 * 24 * (currDate - 1)
    //             );
    //         } else {
    //             m1 = m2 = Date(now.valueOf());
    //         }

    //         // New Date from previous month before last month
    //         m3 = new Date();
    //         m3.setDate(0);

    //         m4 = new Date();
    //         m4.setDate(0);
    //         m4.setDate(1);
    //         // prevMonthDate.setDate(1);
    //         // prevMonthDate.setHours(0, 0, 0, 0);

    //         // // w3 = new Date(w2.valueOf() - 1000 * 60)

    //         const [m_year1, m_year2] = [m1.getFullYear(), m2.getFullYear()];
    //         const [m_month1, m_month2] = [m1.getMonth() + 1, m2.getMonth() + 1];
    //         const [m_date1, m_date2] = [m1.getDate(), m2.getDate()];

    //         const [m_year3, m_year4] = [m3.getFullYear(), m4.getFullYear()];
    //         const [m_month3, m_month4] = [m3.getMonth() + 1, m4.getMonth() + 1];
    //         const [m_date3, m_date4] = [m3.getDate(), m4.getDate()];

    //         // Current month
    //         const m_metrics1 = dataOrders?.order?.filter(function (o) {
    //             let o_date = moment(o.createdAt).format("YYYY-M-D");
    //             let o_date_arr = o_date.split("-");

    //             let o_y = parseInt(o_date_arr[0]);
    //             let o_m = parseInt(o_date_arr[1]);
    //             let o_d = parseInt(o_date_arr[2]);

    //             return (
    //                 o_y >= m_year2 &&
    //                 o_y <= m_year1 &&
    //                 o_m >= m_month2 &&
    //                 o_m <= m_month1 &&
    //                 o_d >= m_date2 &&
    //                 o_d <= m_date1
    //             );
    //         });

    //         // Last month
    //         const m_metrics2 = dataOrders?.order?.filter(function (o) {
    //             let o_date = moment(o.createdAt).format("YYYY-M-D");
    //             let o_date_arr = o_date.split("-");

    //             let o_y = parseInt(o_date_arr[0]);
    //             let o_m = parseInt(o_date_arr[1]);
    //             let o_d = parseInt(o_date_arr[2]);

    //             return (
    //                 o_y >= m_year4 &&
    //                 o_y <= m_year3 &&
    //                 o_m >= m_month4 &&
    //                 o_m <= m_month3 &&
    //                 o_d >= m_date4 &&
    //                 o_d <= m_date3
    //             );
    //         });

    //         let m_totalSales1 = m_metrics1
    //             .map((o) => o.total)
    //             .reduce((a, b) => parseFloat(a) + parseFloat(b), 0);

    //         let m_totalSales2 = m_metrics2
    //             .map((o) => o.total)
    //             .reduce((a, b) => parseFloat(a) + parseFloat(b), 0);

    //         let m_collected_metrics = m_metrics1.filter(
    //             (o) => o?.PaymentStatus?.toLowerCase() === "paid"
    //         );

    //         let m_collected = m_collected_metrics
    //             .map((o) => o.total)
    //             .reduce((a, b) => parseFloat(a) + parseFloat(b), 0);

    //         let m_growth =
    //             ((m_totalSales1 - m_totalSales2) / m_totalSales2) * 100 || 0;

    //         setMonthMetrics([
    //             formatMoney(m_totalSales1) || "0.00",
    //             formatMoney(m_collected) || "0.00",
    //             to2DecPlaces(m_growth) + "%"
    //         ]);
    //     }
    // }, [dataOrders]);

    //console.log(getUserProductList?.products,'MapMertics')
    
// const startDate = '167308915';
// const endDate = '1678128831';
//     const [startDate, setStartDate] = useState('1646611200');
//   const [endDate, setEndDate] = useState('1678147200');





    useEffect(() => {
        if ( startDate && endDate ) {
             GetAllMetricsOrders(startDate, endDate)
        }
    }, [GetAllMetricsOrders])

    const today = moment();
     const [startDate, setStartDate] = useState('2022-01-01');
  const [endDate, setEndDate] = useState( today.format('MM/DD/YYYY'));
  
  const [datas, setDatas] = useState([]);



  
  const handleSubmit = async (event) => {
    
    event.preventDefault();
    const fetchedData = await GetAllMetricsOrders(startDate, endDate);
    setDatas(fetchedData);
  };


  
   
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
                                 <form id="sortform" class=" mt-1 row "  onSubmit={handleSubmit}>
                                <div class="col-auto">
                                    {/* <label  > Start Date</label> */}
                                    <input type='date'  class="form-control border border-secondary mt-1" id="inpt" value={startDate} onChange={e => setStartDate(e.target.value)}/>
                                </div>
                                <div class=" col-auto">
                                    {/* <label >End Date</label> */}
                                    <input placeholder="today" type='date'   class="form-control border-secondary col-auto border  mt-1" id="inpt"  value={endDate} onChange={e => setEndDate(e.target.value)}/>
                                </div>
                               
                                <div className=" col-auto"> 
                                        <button  id="submitbtn"   class="btn mt-1 bg-color-2 "> Filter </button>
                                </div>
                    </form>
                            </div>
                    </div>
                    {/* Chart Module */}
                    <div>
                        <div className="mb-5">
                            <div className="row">
                                
                                    <div
                                        
                                        className="col-md-6 col-lg-4"
      >
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
                                                                    {"NGN"}{" "} { (state?.allMetricsOrder?.total_orders_amount) > 0 ? ( <div> {formatMoney(state?.allMetricsOrder?.total_orders_amount)}</div> ) : (<div> 00.00 </div>)  } 

                                                                    
                                                                </h6>
                                                                <p className="mb-0 text-muted">
                                                                    
                                                                 Total Sales Orders
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        />

                                        
                                    </div>

                                    <div
                                        
                                        className="col-md-6 col-lg-4" >
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

                                                                    {"NGN"}{" "} { (state?.allMetricsOrder?.total_orders_amount - state?.allMetricsOrder?.pay_later_orders?.total_amount) > 0 ? ( <div> {formatMoney((state?.allMetricsOrder?.total_orders_amount - state?.allMetricsOrder?.pay_later_orders?.total_amount))}</div> ) : (<div> 00.00 </div>)  } 
                                                                </h6>
                                                                <p className="mb-0 text-muted">
                                                                    
                                                                 Total Sales Collections
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        />

                                        
                                    </div>

                                     <div
                                        
                                        className="col-md-6 col-lg-4" >
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


                                                                    {"NGN"}{" "} { (state?.allMetricsOrder?.pay_later_orders?.total_amount ) > 0 ? ( <div> {formatMoney(state?.allMetricsOrder?.pay_later_orders?.total_amount )}</div> ) : (<div> 00.00 </div>)  } 

                                                                    
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
                            isLoading={productLoading}
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

    #sortform{
        width: fit-content;
        margin-left: auto;
        /* border: 1rem;
        border-radius: 1rem; */
       
        
        
        
    }
    #inpt{
        border-radius:1rem;
        border-color: black;
    }
    #submitbtn{
       background-color:  #463c74;
        color: white;
        border-radius: 0.5rem;
    }
    #formdiv{
        margin-right: 3rem;
    }

    @media (max-width: 767px) {
        .homepage {
            padding-top: 14rem;
        }
        .registering-cta {
            left: 0;
        }

        #formdiv{
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

        #formdiv{
        
        margin-right: 0rem;
       
       align-items: center;
    }

     #submitbtn{
       width: 100%;
       margin: 0 auto;

       
    }

   

    


       
    }
`;

export default HomePage;
