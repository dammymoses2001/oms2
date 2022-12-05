import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Loading } from "../../../components";

import { useAuth } from "../../../hooks";

export  const VerifyPayment =()=> {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const  trxref =searchParams.get("trxref");
    const  reference =searchParams.get("reference");
    const { completeSubscriptionFunc,state } = useAuth();
    const [loading,setLoading] =useState(true);

    //console.log(state?.data?.hasSubscribed,"state");
    useEffect(() => {
        if(state?.data?.hasSubscribed=== false &&  reference &&trxref && loading){
          
            completeSubscriptionFunc(trxref,reference);
        }
       
        setLoading(false);
           
    }, [completeSubscriptionFunc, loading, reference, state?.data?.hasSubscribed, trxref]);
    

    useEffect(() => {
        if(state?.data?.hasSubscribed === true) {
            navigate("/");
        }
    }, [navigate, state?.data?.hasSubscribed]);
   

   
    return <div><Loading/></div>;
};
