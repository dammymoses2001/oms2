import React, { useEffect, useState } from "react";
import { AppLayout, CardComp, Loading, TableCompData, TopNav, ModalComp, Input,} from "../../components";
import moment from "moment";
import { BiConversation,BiSearchAlt } from "react-icons/bi";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks";
import { GrView } from "react-icons/gr";
import toast from "react-hot-toast";
import { CSVLink, CSVDownload } from "react-csv";


import {
    customerColumns,
    CustomerHeader,
    CustomerOrderHeader,
    ProductHeader,
     customerheaders,
    handleCustomerCSvData,
     SortOrder,
     
} from "../../utils/datautils";
import { Dropdown } from "react-bootstrap";
import { formatMoney } from "../../utils";
import { addCustomer } from "../../services";

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




 



    





export const Customer = () => {
    const initialState = {
       "businessName": "",
   "contactPersonName": "",
  "licenceNumber": "",
  "premisesLicence": "",
  "businessPhoneNumber": "",
  "address": "",
  "state": "",
  "lga": "",
  "customerTier": "",
  "email": ""
 

    };

    const [show, setShow] = useState(0);
    const [getCustomers, setGetCustomers] = useState(false);
    const [getCustomers1, setGetCustomers1] = useState(false);
    const [product, setProduct] = useState([]);
    const [data, setData] = useState("");

    const { AddCustomer, state:{allCustomer,isLoading}, GetAllCustomer,check } = useAuth();


    const [query, setQuery] = useState("");
     const [userData, setUserData] = useState(initialState);
     const [showModal, setModal] = useState(false);
     

         useEffect(() => {
      if(check){
        setModal(false)
      }
    }, [check])

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const {
    
        businessName,
        contactPersonName,
        businessPhoneNumber,
        state,
        lga,
        customerTier,
        licenceNumber,
        premisesLicence,
        address,
        email,
 
    } = userData;

    const handleSubmit = (e) => {
        e.preventDefault();
           const value = {
        businessName: businessName,
        contactPersonName: contactPersonName,
        businessPhoneNumber: businessPhoneNumber,
        state:state,
        lga:lga,
        customerTier:customerTier,
        email: email,
        licenceNumber:licenceNumber,
        premisesLicence:premisesLicence,
        address:address,
        };
       // console.log(value)
        AddCustomer(value);
    };

    

   
 const search = (allCustomer) => {
        return allCustomer?.filter((row)=> row?.businessName.toLowerCase().includes(query) || row?.contactPersonName.toLowerCase().includes(query) );
    }
 

    useEffect(() => {
        GetAllCustomer()
    
    }, [GetAllCustomer])




    



    const headers = [
        {label: "Business Name", key: "Business Name"},
         {label: "", key: ""},
         {label: "Contact Name", key: "Contact Name"},
         {label: "", key: ""},
          {label: "LGA", key: "LGA"},
          {label: "", key: ""},
           {label: "State", key: "State"},
           {label: "", key: ""},
            {label: "Phone Number", key: "Phone Number"},
            {label: "", key: ""},
             {label: "Added At", key: "Added At"},
    ]


       
   

     console.log(allCustomer, "customer")

    return (
        <AppLayout mode="light">

            <Style>
                 <div className="d-flex align-items-center search px-1 ">
                <BiSearchAlt size={20} className="me-2"/>
                 <input placeholder="Search customer" className="px-1 py-2 text-black"
                 onChange={(e)=>setQuery(e.target.value)}/></div> 


                <div className="mb-3">
                    <TopNav
                        TextComp={<span className="color-1 h3">Customers</span>}
                        RightComp={
                            <div className="color-2">
                                {data && (
                                    <button
                                        className="btn me-2 bg bg-1 h6"
                                        onClick={() => {
                                            setData(null);
                                            setShow(0);
                                        }}
                                    >
                                        {"Back To Customers"}
                                    </button>
                                )}

                                {/* <button
                                onClick={() => setModal(true)}
                                className=" exportbtn mr-4 btn bg-6 text-white h6"
                            >
                                 Add customer
                            </button> */}


                                <CSVLink
                                
                             
                             filename={"Customer List"} 
                             data={handleCustomerCSvData (allCustomer)} headers={headers}
                              >
                                   
                              <button  className=" px-3 pl-4  py-1 bg bg-1 h-6" >  Export </button>
                                </CSVLink>
                                {/* <Link to="#" className="mr-2 btn bg-1 h6">
                                    Add Customer
                                </Link> */}
                            </div>
                        }
                    />
                </div>

                {!isLoading ? (
                          <CardComp
                        
                          bodyText={
                            <TableCompData
                            columns={customerColumns}
                            data={search(allCustomer)}
                            pagination
                        />
                          }
                          
                          />
                        ) : (
                            <Loading height={"50vh"} />
                        )}

                        <ModalComp
                          show={showModal}
                    handleClose={() => setModal(false)}
                    size="lg"
                    title={
                        <h4 className="color-3">Add Customer</h4>
                         } 
                          bodyText={
                        <div className="px-4">
                            <form className="w-100" onSubmit={handleSubmit}>
                                <div className="row ">
                                    <div className="col-lg-6 mb-2">
                                        <Input
                                            label={"businessName"}
                                            labelclassname=""
                                            size="md"
                                            name="businessName"
                                            onChange={handleOnChange}
                                            value={businessName}
                                        />
                                    </div>
                                </div>

                                 <div className="d-flex justify-content-end">
                                        <div className="col-10">
                                            <div className="row">
                                                <div className="col-6">
                                                    <button
                                                        onClick={() =>
                                                            setModal(false)
                                                        }
                                                        className="py-2 border-0 w-100"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                                <div className="col-6">
                                                     <button
                                                        type="submit"
                                                        className="py-2 border-0 w-100 bg-6 text-white"
                                                    >
                                                        Add Customer
                                                    </button> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </form>
                        </div>
                    }
                         
                         />
                    

                
            </Style>
            
        </AppLayout>
        
    );
                         
};


