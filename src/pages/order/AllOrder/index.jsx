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
import { BiConversation,BiSearchAlt } from "react-icons/bi";

import { getOrder } from "../../../services";

import { handleCSvData, HeaderOrder, ProductColumn, SortOrder } from "../../../utils/datautils";





export const OrderShowAll = () => {
    const [show, setShow] = useState(false);
    const [orderData, setOrderData] = useState(false);
    const [declineModal, setDeclineModal] = useState(false);
    const [supplierDetail, setSupplierDetail] = useState();
    const [rejectReason,setRejectReason] =useState("")
    const { state, getAllUserProductFunc, AcceptOrderFunc, RejectOrderFunc,state:{check} } =
        useAuth();

   

    useEffect(() => {
      if(check){
        setOrderData(false)
        setDeclineModal(false)
      }
    }, [check])
    
    const { data: dataOrders,isLoading, } = useQuery("get-orders", getOrder, {
        // refetchOnWindowFocus: true,
        refetchInterval: 2000
        // refetchIntervalInBackground: true,
    });
    // console.log(dataOrders,'dataOrders')

    const [query, setQuery] = useState("");
   
 const search = (orderData) => {
        return orderData?.filter((row)=>row?.order?.customer?.businessName.toLowerCase().includes(query)||row?.user?.firstName.toLowerCase().includes(query)|| moment(row?.order?.payLaterDate ).format("MMM Do YY").toLowerCase().includes(query));
    }

    console.log(isLoading, "isLoading")
  
    useEffect(() => {
        getAllUserProductFunc(state?.data?._id);
    }, [getAllUserProductFunc, state?.data?._id]);

    const headers = [
        { label: "Field Staff", key:'Field Staff' },
         { label: "", key:'' },
         { label: "Customer", key:'Customer' },
          { label: "", key:'' },
        { label: "Prod. Qty", key: "Prod. Qty" },
        { label: "Address", key: "Address" },
         { label: "", key:'' },
          { label: "", key:'' },
        { label: "Status", key: "Status" },
        { label: "", key:'' },
        { label: "Payment Method", key: "Payment Method" },
        { label: "", key:'' },
        { label: "Payment Status", key: "Payment Status" },
        { label: "", key:'' },
        { label: "Amount", key: "Amount" },
        { label: "", key:'' },
        { label: "Order Date", key: "Order Date" }
        
        
        
      ];

    // useEffect(() => {
    //     getAllUserOrderFunc();
    // }, [getAllUserOrderFunc]);

    //   console.log(handleCSvData(dataOrders),'SortOrder(dataOrders)')

    return (
        <AppLayout mode="light">
            
            <Style>
                {/* {console.log(SortOrder())} */}

                 <div className="d-flex align-items-center search px-1 ">
                <BiSearchAlt size={20} className="me-2"/>
                 <input id="search" placeholder="Search FieldStaff, Customer, & Due Dates" className="px-1 py-2 text-black"
                 onChange={(e)=>setQuery(e.target.value)}/></div> 

                <div className="mb-3 mt-2">
                    <TopNav
                        TextComp={
                            <h5 className="color-1 fw-2">Order Management</h5>
                        }
                        RightComp={
                            <div className="color-2">
                                {/* <button className="mr-2 bg bg-1 h6" >View All Products</button> */}
                                {/* <CSVLink data={SortOrder(dataOrders)}>Download me</CSVLink>; */}
                                <CSVLink  filename={"Management Orders"}
                               
                                data={handleCSvData(dataOrders)} headers={headers}>
                                   
                               <button  className=" px-3 pl-4  py-1 bg bg-1 h-6 ml-4 btn1" >  Export </button>
                                </CSVLink>
                                {/* <Link to="#" className="mr-2 btn bg-1 h6">
                                    Export
                                </Link> */}
                            </div>
                        }
                    />
                </div>

                <div className="px-3 px-md-5 shadow bg-white pt-4 height-80">
                    {isLoading ? (
                        <TableCompData
                            columns={HeaderOrder(setOrderData,setShow,setSupplierDetail,dataOrders)}
                            data={search(SortOrder(dataOrders))}
                            pagination

                        />
                       
                    ) : (
                       
                        <Loading height={"50vh"} /> 
                    )}
                    
                </div>
                
            </Style>
            
            <OrderModal
show={show}
orderData={orderData}
setShow={setShow}
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

      input{
    border:none;
    outline:none;
    background:transparent;
    color:black;
    text: center;
    width: 90%;
}


    .search{
   border-style: solid;
   background-color:white;
    margin: auto;
  width: 50%;
   border-width: 0.5px;
   border-radius: 15px;
   border-color: #F0F2F8;
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
