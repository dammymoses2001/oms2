/* eslint-disable quotes */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AppLayout,  Loading } from "../../../components";
import { useAuth } from "../../../hooks";


const Style = styled.div`
.paid{
    background-color: #463c74;
  border-radius: 0 5px 5px 0;
  color:'#fff';
}
.free{
        border: 2px solid #463c74;
     border-radius: 5px 0 0 5px;
}

`;

export const SelectAccountType = () => {
    const { getPackagesData ,subscriptionFunc,getPackagesFunc,state } = useAuth();
    const navigate =useNavigate();
    // const from = location.state?.from?.pathname || "/";

    // const handleLogin = () => {
    //     navigate(from, { replace: true });
    useEffect(() => {
        if(!getPackagesData?.package){
            getPackagesFunc();
        }
       
    }, [getPackagesData, getPackagesFunc]);
    // };
    //console.log(state?.data,getPackagesData,"getPackagesData hasSubscribed");

    useEffect(() => {
        if(state?.data?.hasSubscribed){
            return navigate('/');
        }
    }, [navigate, state?.data?.hasSubscribed]);
    
   
    

    const handleSubscription = (id) => {
        subscriptionFunc(id);

    };
    if(getPackagesData.loading) return <div><Loading/></div>;
    if(!getPackagesData.loading )
        return (
            <AppLayout    mode="light" >
                <div className="main-content pt-2 pt-md-1 pb-2 pb-md-5 mb-2 mb-md-5">
                    <div className="choose-account pt-3 pt-md-2 pb-3 pb-md-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 text-center pt-3 pb-3">
                                    <span className="d-inline-block pr-3 text-dark">
                                        <p
                                            className="mb-0 d-inline text-capitalize"
                                            style={{ color: "#463c74" }}
                                        >
                                            Select Account Type
                                        </p>
                                    </span>
                                    <span className="d-inline-block">
                                        <Link
                                            to=""
                                            className="btn btn-warning btn-lg text-uppercase"
                                            role="button"
                                            aria-pressed="true"
                                            style={{
                                                borderRadius: "50px 0 0 50px",
                                                fontSize: 16
                                            }}
                                        >
                                            Business
                                        </Link>
                                        <Link
                                            to=""
                                            className="btn btn-outline-warning btn-lg text-uppercase"
                                            role="button"
                                            aria-pressed="true"
                                            style={{
                                                borderRadius: "0 50px 50px 0",
                                                fontSize: 16
                                            }}
                                        >
                                            supplier
                                        </Link>
                                    </span>
                                </div>
                            </div>
                            <Style>
                                <div className="row pt-3 pt-md-5">
                                    {getPackagesData?.package &&getPackagesData?.package.map((item,index)=>
                                        <div key={index}
                                            className={`col-12 col-md-6 py-5 text-center  ${index === 0 ? "free":'paid text-white'}`}
                                        // 
                                        >
                                            <span className="w-100 mb-3 mb-md-5 d-block text-uppercase">
                                                <h6>{item?.name}</h6>
                                            </span>
                                            <span className="w-100 mb-3 d-block text-center d-flex justify-content-center">
                                                <h5
                                                    className="currency d-inline-block text-uppercase pr-2"
                                                    style={{ lineHeight: "2.5em" }}
                                                >
                                                    {item?.currency}
                                                </h5>
                                                <h1 className="money-value d-inline-block ">
                                                    {item?.packageAmount}
                                                </h1>
                                            </span>
                                            <span className={`w-100 mb-3 mb-md-5 d-block  w-75 px-md-5 ${index ===0 ? "text-muted" :"text-white"}`}>
                                                {item?.description}
                                            </span>
                                            <span className="w-100 d-block">
                                                <button
                                                    className="btn btn-outline-warning text-uppercase"
                                                    // href="register.html"
                                                    role="button"
                                                    onClick={()=>handleSubscription(item?._id)}
                                                >
                                                    {item?.btnText}
                                                </button>
                                            </span>
                                        </div>)}
                                    {/* <div
                                    className="col-12 col-md-6 py-5 text-center"
                                    style={{
                                        border: "2px solid #463c74",
                                        borderRadius: "5px 0 0 5px"
                                    }}
                                >
                                    <span className="w-100 mb-3 mb-md-5 d-block text-uppercase">
                                        <h6>7 Days Trial</h6>
                                    </span>
                                    <span className="w-100 mb-3 d-block text-center d-flex justify-content-center">
                                        <h5
                                            className="currency d-inline-block text-uppercase pr-2"
                                            style={{ lineHeight: "2.5em" }}
                                        >
                                            ngn
                                        </h5>
                                        <h1 className="money-value d-inline-block ">
                                            0
                                        </h1>
                                    </span>
                                    <span className="w-100 mb-3 mb-md-5 d-block text-muted w-75 px-md-5">
                                        Give you access to unlimited price list from
                                        different pharmaceutical companies.
                                    </span>
                                    <span className="w-100 d-block">
                                        <button
                                            className="btn btn-outline-warning text-uppercase"
                                            // href="register.html"
                                            role="button"
                                            onClick={()=>setPage(true)}
                                        >
                                            Continue
                                        </button>
                                    </span>
                                </div> */}
                                    {/*  */}
                                    {/* <div
                                    className="col-12 col-md-6 py-5 text-center"
                                    style={{
                                        backgroundColor: "#463c74",
                                        borderRadius: "0 5px 5px 0"
                                    }}
                                >
                                    <span className="w-100 mb-3 mb-md-5 d-block text-uppercase text-white">
                                        <h6>7 Days Trial</h6>
                                    </span>
                                    <span className="w-100 mb-3 d-block text-center d-flex justify-content-center text-white">
                                        <h5
                                            className="currency d-inline-block text-uppercase pr-2"
                                            style={{ lineHeight: "2.5em" }}
                                        >
                                            ngn
                                        </h5>
                                        <h1 className="money-value d-inline-block ">
                                            500
                                        </h1>
                                        <h5
                                            className="currency d-inline-block text-uppercase pl-2"
                                            style={{ lineHeight: "2.5em" }}
                                        >
                                            P/M
                                        </h5>
                                    </span>
                                    <span className="w-100 mb-3 mb-md-5 d-block text-white w-75 px-md-5">
                                        Give you unlimited access to different price
                                        lists from different pharmaceutical
                                        companies and the ability to complete your
                                        order
                                    </span>
                                    <span className="w-100  d-block">
                                        <Paystack/>
                                       
                                    </span>
                                </div> */}
                      
                                </div>
                            </Style>
                        </div>
                    </div>
                </div>
            </AppLayout>
        );
};
