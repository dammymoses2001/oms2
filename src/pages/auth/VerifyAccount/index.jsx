import React, { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthLayout, Button, Input } from "../../../components";
import { useAuth } from "../../../hooks";

export const VerifyAccount = () => {
    const navigate = useNavigate();
    const { state }=useAuth();

    const { VerifyAccountFunc } = useAuth();
    const [token,setToken] =useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        VerifyAccountFunc(token);
    };

    useEffect(() => {
        if(state?.data?.isVerified === true) {
            return navigate("/");
        }
    }, [navigate, state?.data?.isVerified]);
    

   
    return (
        <AuthLayout>
            <div className="py-5"></div>
            <div className="main-content pt-2 pt-md-5 pb-2 pb-md-5 mb-2 mb-md-5">
                <div className="container h-100">
                    <div className="row mt-4 d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="p-3">
                                <h4
                                    className="w-100 font-helvetica text-center mb-3"
                                    style={{
                                        color: "#463c74",
                                        fontWeight: "bold"
                                    }}
                                >
                                    Verify Account
                                </h4>
                                <p
                                    className="w-100 px-sm-5 text-center mb-5 font-helvetica"
                                    style={{ color: "#7d7d7d" }}
                                >
                                    Enter your verify code to activate your account
                                </p>
                                <form>
                                    <Input placeholder="Enter Token" onChange={(e)=>setToken(e.target.value)} />
                                    <div className="heading-title pb-3">
                                        <div className="container">
                                            <div className="row">
                                                {/* <h3
                                                    className="text-center w-100"
                                                    style={{
                                                        color: "#bebebe",
                                                        fontSize: 17
                                                    }}
                                                >
                                                    OR
                                                </h3> */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* <Input.Phone placeholder="Phone" /> */}
                                    <div className=" mt-3">
                                        <Button
                                          type="button"
                                          bgColor="#463c74"
                                            className="w-100 text-white"
                                            variant="info"
                                            onClick={handleSubmit}
                                        >
                                            Verify 
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
};
