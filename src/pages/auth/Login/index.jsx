import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useFormValidator from "use-form-input-validator";

import {  Button, Input,NavbarComp } from "../../../components";
import { useAuth } from "../../../hooks";




export const Login = () => {
    const navigate = useNavigate();
    // const from = location.state?.from?.pathname || "/";
    const {
        login,
        state: { isLoading, isLoggedIn }
    } = useAuth();

    const { values, errors, updateField, isAllFieldsValid } = useFormValidator({
        email: {
            checks: "required|email",
            value: ""
        },
        password: {
            checks: "required|min:8",
            value: ""
        }
    });

    const handleLogin = (e) => {
        e.preventDefault();
        if (isAllFieldsValid()) {
            const payload ={
                username:values?.email,
                password:values?.password  
            }
            console.log(payload)
            login(payload);
        }
    };


    useEffect(() => {

        if (isLoggedIn === true) {
            navigate("/");
        }

    }, [isLoggedIn, navigate]);


    return (
        <Style>
            <NavbarComp/>
            <div className="row g-0 h-100 Login">
                <div className="col-md-6  d-flex align-items-center justify-content-center  side1">
               
                    <div className="container d-flex align-items-center">
                        <div className="py-5 px-3 px-md-5 text-left form">
                            <h3 className="font-weight-normal"> Welcome to the PharmaServ <br />
                                </h3>
                            <h2 className="font-weight-bolder">Operations Management System
                                </h2>
                        </div>
                    </div>
                  
                </div>
                <div className="col-md-6   side2 py-5">
                   <div className="d-flex justify-content-center align-items-center h-100">
                   <div className=" col-9 col-md-7">
                       <form className="w-100">
                       <h1 className="mb-5 font-weight-bold ">Log in to your <br/>account.</h1>
                        <Input.Input2
                            name="email"
                            placeholder="Email"
                            onChange={updateField}
                            error={errors.email}
                            isdisabled={isLoading}
                        />
                        <Input.Input2
                            name="password"
                            placeholder="Password"
                            type="password"
                          
                            onChange={updateField}
                            error={errors.password}
                            isdisabled={isLoading}
                        />
                        
                        <div className="d-flex  align-items-center justify-content-between mt-4 mb-4 ">
                            <div className="d-flex  align-items-center ">
                                <input placeholder="Password" className="mr-1 "  type={"checkbox"}/> 
                                <div className="">Remember me</div>
                            </div>
                            <Link to="/forgot-password" className="text-white">Forgot Password</Link>
                        </div>
                        <div className="d-flex justify-content-center mt-4">
                            <div className="col-8">
                            <Button
                                type="submit"
                                bgColor="#463c74"
                                className="px-3 px-md-4 btn-1 text-white py-2  w-100"
                                isLoading={isLoading}
                                variant="info"
                                onClick={handleLogin}
                            >
                                Login
                            </Button>
                            </div>
                            {/* <Link
                                to="/register"
                                className="px-3 px-md-4 btn-2 py-2 text-black br-1"
                            >
                                Sign up
                            </Link> */}
                            {/* <button className="px-3 px-md-5 btn-1 text-white py-2 ">Login</button>
                            <button className="px-3 px-md-5 btn-2 py-2">Sign Up</button> */}
                        </div>
                       </form>
                    </div>
                   </div>
                </div>
            </div>
          
        </Style>
    );
};

const Style = styled.div`

height:100vh;
overflow:hidden;
color:white;
.login{
    min-height:calc(100vh - 86px)
    
}
.fw-bolder{
    font-weight:600;
}
.login .row{
    min-height:100vh;
}
h5{
    font-weight:500; 
}
h3{
    line-height:40px;
}
input{
    border: none;
    outline: none;
    border-bottom: 1px solid white !important;
    color: black;
    // background:transparent;
    font-size:14px;
}
.side1{
    background:#bdc4c4;
}
.side2{
    background:#a6acb4;
}
.form{
    margin:0 auto;
}

h6{
    font-size:18px
}

::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: #fff !important;
}
::-moz-placeholder {
    /* Firefox 19+ */
    color: #fff !important;
}
:-ms-input-placeholder {
    /* IE 10+ */
    color: #fff !important;
}
.form-check-input[type=checkbox] {
    border-radius: 0.25em;
    border: 1px solid black;
}
@media (max-width: 786px) {
    height: fit-content;
    min-height:100vh !important;
.col-md-6:nth-child(1){
    min-height:50vh;
}

}
/* .col-md-6,.row{
    border:1px solid ;
} */
`;