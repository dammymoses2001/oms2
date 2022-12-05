/* eslint-disable sort-keys */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useFormValidator from "use-form-input-validator";
import { Button, Input, NavbarComp, SelectComp } from "../../../components";
import { useAuth } from "../../../hooks";
import NaijaStates from "naija-state-local-government";
import BackgroundImage from "../../../assets/images/signupdesign.svg";
import Select from "react-select";
import toast from "react-hot-toast";
//import { SelectAccountType } from "../SelectAccountType";

const Style = styled.div`
    height: 100vh;
    overflow: hidden;
    color: white;
    .login {
        min-height: calc(100vh - 86px);
    }
    .fw-bolder {
        font-weight: 600;
    }
    .login .row {
        height: 100%;
    }
    h5 {
        font-weight: 500;
    }
    h3 {
        line-height: 40px;
    }
    .form-check-input[type="checkbox"] {
        border-radius: 0.25em;
        border: 1px solid black;
    }
    input {
        border: none;
        outline: none;
        border-bottom: 1px solid #fff !important;
        color: black;
        // background:transparent;
        font-size: 14px;
    }
    .side1 {
        background: #8C929F;
        overflow: hidden;
    }
    .side2 {
        background: #BDC4C4;
    }
    .form {
        margin: 0 auto;
    }

    h6 {
        font-size: 18px;
    }
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: white;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: white;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: white;
}
    @media (max-width: 786px) {
        height: fit-content;
        min-height: 100vh !important;
        row:nth-child(1) .col-md-6 {
            min-height: 70vh;
        }
    }
    /* .col-md-6,.row{
    border:1px solid ;
} */
`;

export const Register = () => {
    const navigate = useNavigate();
    const {
        register,GetAllCompanies,
        state: { isLoading, isLoggedIn,allCompanies,isLoggingIn }
    } = useAuth();
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const { values, errors, updateField, isAllFieldsValid } = useFormValidator({
     
        firstName: {
            checks: "required",
            value: ""
        },
        lastName: {
            checks: "required",
            value: ""
        },

        email: {
            checks: "required|email",
            value: ""
        },

        password: {
            checks: "required|min:8",
            value: ""
        },
        confirmpassword: {
            checks: "required|min:8",
            value: ""
        },
        
        state: {
            checks: "required",
            value: ""
        },
        company: {
            checks: "required",
            value: ""
        }

        // lgas: {
        //     checks: "required",
        //     value: selectedOption
        // },
    });

    console.log(values)

    useEffect(() => {
        GetAllCompanies()
    }, [GetAllCompanies])
    
    const handleLga = (lgas) => {
        //  console.log(lgas)
        const newArray = [];
        if (lgas !== "State") {
            NaijaStates.lgas(lgas)?.lgas?.forEach((item) => {
                newArray.push({
                    value: item,
                    label: item
                });
            });
        }

        //

        //  lgas?.map((item)=>{
        //      newArray.push({
        //          value:item,label:item
        //      })
        //  })

        return newArray;
    };

    const handleRegister = (e) => {
        //  console.log(values,"values");
        e.preventDefault();
        if (values?.password !== values?.confirmpassword) {
            toast.error("Password and Confirm-Password must be the same");
        }
        console.log('see0')

        if (values?.password === values?.confirmpassword) {
            const newlgsarray = [];
            selectedOption &&
                selectedOption.map((item) => newlgsarray.push(item?.value));
            const desiredLocations = [
                {
                    state: values?.state,
                    lgas: newlgsarray
                }
            ];
            console.log('see1',values)
            if (isAllFieldsValid()) {
                const value = {
                    ...values,
                    desiredLocations: desiredLocations,
                    passwordConfirm: values.password,
                    company:allCompanies?.find((item)=>item?.supplierName ===values?.company)?.id
                };
// console.log(value,'hello')
                register(value);
            }
        }
    };

    useEffect(() => {
        if (isLoggedIn === true) {
            navigate("/");
        }
    }, [isLoggedIn, navigate]);

    // console.log(NaijaStates.states(),values);
    // console.log(NaijaStates.lgas("Oyo"))

    return (
        <Style>
            {/* <NavbarComp light /> */}
            <div className="row g-0 h-100">
                <div className="col-lg-6  d-flex align-items-center justify-content-center  side1 h-40 position-relative">
                    
                    <div className="container">
                        <div className="py-5 px-md-5 text-left form background">
                            {/* <h3 className="font-weight-normal"> Welcome to the PharmaServ <br />
                                <span className="fw-bolder">Operations Management System</span></h3> */}
                        </div>
                    </div>
                 
                </div>
                <div className="col-lg-6 h-100 d-flex align-items-center  side2">
                    <div className="form px-3 px-lg-5 py-5">
                        <h5 className="mb-5 mt-3 font-weight-light text-center text-white">
                        Please complete to create your account 
                        </h5>
                        <form onSubmit={handleRegister} className="pt-3">
                            <div className="row container mx-0 mx-md-auto px-md-3">
                                <div className="col-md-12 mb-2">
                                    <Input.Input2
                                        name="firstName"
                                        placeholder="First Name"
                                        inputclassname={"pb-2 text-white "}
                                        onChange={updateField}
                                        value={values.firstName}
                                        error={errors.firstName}
                                        // isDisabled={isLoading}
                                    />
                                </div>
                                <div className="col-md-12 mb-2">
                                    <Input.Input2
                                        name="lastName"
                                        placeholder="Last Name"
                                        inputclassname={"pb-2"}
                                        onChange={updateField}
                                        value={values.lastName}
                                        error={errors.lastName}
                                        // isDisabled={isLoading}
                                    />
                                </div>
                                
                                <div className="col-md-12 mb-2">
                                    <Input.Input2
                                        name="email"
                                        placeholder="Email"
                                        onChange={updateField}
                                        inputclassname={"pb-2"}
                                        value={values.email}
                                        error={errors.email}
                                        isdisabled={isLoading}
                                    />
                                </div>
                                <div className="col-md-6 mb-2">
                                    <Input.Input2
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                        onChange={updateField}
                                        inputclassname={"pb-2"}
                                        value={values.password}
                                        error={errors.password}
                                        isdisabled={isLoading}
                                    />
                                </div>
                                <div className="col-md-6 mb-2">
                                    <Input.Input2
                                        name="confirmpassword"
                                        placeholder="Confirm-Password"
                                        type="password"
                                        inputclassname={"pb-2"}
                                        onChange={updateField}
                                        value={values.confirmpassword}
                                        error={errors.confirmpassword}
                                        isdisabled={isLoading}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <SelectComp
                                        name="state"
                                        type="text"
                                        // selectOption={"State"}
                                        placeholder="State"
                                        className="select pb-2"
                                        selectOption={"State"}
                                        options={NaijaStates.states()}
                                        onChange={updateField}
                                        value={values.state}
                                        error={errors.state}
                                        // isDisabled={isLoading}
                                    />
                                </div>
                                <div className="col-md-6 mb-3 text-black">
                                    
                                    <Select
                                        name="lgas"
                                        defaultValue={selectedOption}
                                        onChange={setSelectedOption}
                                        options={
                                            values.state
                                                ? handleLga(values.state)
                                                : []
                                        }
                                        isMulti={true}
                                        placeholder="select local government"
                                        className="bg-default select1"
                                    />
                                </div>
                                <div className="col-md-12 mb-4">
                                    <SelectComp
                                        name="company"
                                        type="text"
                                        input={'supplierName'}
                                        // selectOption={"State"}
                                        placeholder="Company "
                                        className="select pb-2"
                                        selectOption={"Company"}
                                        options={allCompanies}
                                        onChange={updateField}
                                        value={values.company}
                                        error={errors.company}
                                        // isDisabled={isLoading}
                                    />
                                </div>

                                <div className="col-md-12 mb-4 mt-3">
                                    <div className="form-check d-flex justify-content-start">
                                        <input
                                            className="form-check-input border-1"
                                            type="checkbox"
                                            checked={acceptTerms}
                                            onChange={() =>
                                                setAcceptTerms(!acceptTerms)
                                            }
                                            defaultValue
                                            id="form1Example3"
                                        />
                                        <p
                                            className="form-check-label ps-3 text-black"
                                            htmlFor="form1Example3"
                                        >
                                            I agree to the Terms of Service and
                                            Privacy Policy
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-2" />
                                <div className="col-md-12 text-center mb-4">
                                    <Button
                                        type="submit"
                                        isLoading={isLoading}
                                        isDisabled={!acceptTerms || isLoading}
                                        bgColor="#43425d"
                                        className=" btn-1  px-5 py-2 text-white border-0"
                                        variant="info"
                                    >
                                        Sign up
                                    </Button>
                                </div>
                                <div className=" col-md-12 text-center">
                                    <Link
                                        to="/login"
                                        className="px-3 px-lg-5  py-2 color-1 "
                                    >
                                        Already have an account?{" "}
                                        <span className="text-decoration-underline">
                                            Sign in
                                        </span>
                                        .
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Style>
    );
};
