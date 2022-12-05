import React from "react";
import { useState } from "react";
import { AuthLayout, Button, Input } from "../../../components";
import { useAuth } from "../../../hooks";
import {toast} from 'react-hot-toast'

export const ForgotPassword = () => {
    const {ForgetPassword,state:{isLoading}} =useAuth()
    const [email,setEmail]=useState()

    const handleSubmit = () =>{
        if(!email){
            return toast.error("Email is Required....")
        }
        ForgetPassword({"email":email})
    }
    return (
        <AuthLayout>
            <div className="main-content pt-2 pt-md-5 pb-2 pb-md-5 mb-2 mb-md-5 min-vh-100 d-flex align-items-center">
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
                                    Forgot your password?
                                </h4>
                                <p
                                    className="w-100 px-sm-5 text-center mb-5 font-helvetica"
                                    style={{ color: "#7d7d7d" }}
                                >
                                    Enter your email or phone number and recover
                                    your account
                                </p>
                                <form>
                                    <Input placeholder="Email" type="email" name={"email"} className={"py-0"}  onChange={(e)=>setEmail(e.target.value)}/>
                                    <div className="heading-title pb-3">
                                        <div className="container">
                                            <div className="row">
                                                
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div className=" mt-3">
                                        <Button
                                            type="button"
                                            bgColor="#463c74"
                                            className="w-100 py-3 text-white"
                                            variant="info"
                                            onClick={handleSubmit}
                                        >
                                           {isLoading?'Loading...':'Reset password'} 
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
