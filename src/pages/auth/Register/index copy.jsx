/* eslint-disable sort-keys */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFormValidator from "use-form-input-validator";
import { AuthLayout, Button, Input } from "../../../components";
import { useAuth } from "../../../hooks";
//import { SelectAccountType } from "../SelectAccountType";

export const Register = () => {
    const navigate = useNavigate();
    const {
        register,
        state: { isLoading,isLoggedIn }
    } = useAuth();
    const [acceptTerms, setAcceptTerms] = useState(false);
    // const [page,setPage]=useState(false);
    const { values, errors, updateField, isAllFieldsValid } = useFormValidator({
        firstName: {
            checks: "required",
            value: ""
        },
        lastName: {
            checks: "required",
            value: ""
        },
        address: {
            checks: "required",
            value: ""
        },
        businessName: {
            checks: "required",
            value: ""
        },
        businessPhoneNumber: {
            checks: "required|tel",
            value: ""
        },
        contactPersonName: {
            checks: "required",
            value: ""
        },
        email: {
            checks: "required|email",
            value: ""
        },

        licenceNumber: {
            checks: "required",
            value: ""
        },
        password: {
            checks: "required|min:8",
            value: ""
        },

        premisesLicence: {
            checks: "required",
            value: ""
        }
    });

    const handleRegister = (e) => {
        
        //  console.log(values,"values");
        e.preventDefault();
        if (isAllFieldsValid()) {
            register({ ...values, passwordConfirm: values.password });
        }
    };

    useEffect(() => {
       
        if (isLoggedIn === true) {
            navigate("/");
        }
       
    }, [isLoggedIn, navigate]);
 
    return (
        <AuthLayout >
            <div className="main-content pt-2 pt-md-5 pb-2 pb-md-5">
               
                
                <div className="container">
                    <h3 className="w-100 font-helvetica font-weight-bold text-center mb-5">
                        Create an account
                    </h3>
                    <form onSubmit={handleRegister}>
                        <div className="row container mx-auto px-md-5">
                            <div className="col-md-6 mb-2">
                                <Input
                                    name="firstName"
                                    placeholder="First Name"
                                    onChange={updateField}
                                    value={values.firstName}
                                    error={errors.firstName}
                                    isDisabled={isLoading}
                                />
                            </div>
                            <div className="col-md-6 mb-2">
                                <Input
                                    name="lastName"
                                    placeholder="Last Name"
                                    onChange={updateField}
                                    value={values.lastName}
                                    error={errors.lastName}
                                    isDisabled={isLoading}
                                />
                            </div>
                            <div className="col-md-6 mb-2">
                                <Input
                                    name="email"
                                    placeholder="Email"
                                    onChange={updateField}
                                    value={values.email}
                                    error={errors.email}
                                    isDisabled={isLoading}
                                />
                            </div>
                            <div className="col-md-6 mb-2">
                                <Input.Password
                                    name="password"
                                    placeholder="Password"
                                    onChange={updateField}
                                    value={values.password}
                                    error={errors.password}
                                    isDisabled={isLoading}
                                />
                            </div>
                            <div className="col-md-6 mb-2">
                                <Input
                                    name="businessName"
                                    placeholder="Business Name"
                                    onChange={updateField}
                                    value={values.businessName}
                                    error={errors.businessName}
                                    isDisabled={isLoading}
                                />
                            </div>
                            <div className="col-md-6 mb-2">
                                <Input
                                    name="contactPersonName"
                                    placeholder="Contact Person Name"
                                    onChange={updateField}
                                    error={errors.contactPersonName}
                                    value={values.contactPersonName}
                                    isDisabled={isLoading}
                                />
                            </div>
                            <div className="col-md-6 mb-2">
                                <Input
                                    name="licenceNumber"
                                    placeholder="Licence Number"
                                    onChange={updateField}
                                    error={errors.licenceNumber}
                                    value={values.licenceNumber}
                                    isDisabled={isLoading}
                                />
                            </div>
                            <div className="col-md-6 mb-2">
                                <Input
                                    name="premisesLicence"
                                    placeholder="Premises Licence"
                                    onChange={updateField}
                                    error={errors.premisesLicence}
                                    value={values.premisesLicence}
                                    isDisabled={isLoading}
                                />
                            </div>
                            <div className="col-md-6 mb-2">
                                <Input.Phone
                                    name="businessPhoneNumber"
                                    placeholder="Phone Number"
                                    onChange={updateField}
                                    error={errors.businessPhoneNumber}
                                    value={values.businessPhoneNumber}
                                    isDisabled={isLoading}
                                />
                            </div>
                            <div className="col-md-6 mb-2">
                                <Input
                                    name="address"
                                    placeholder="Business Address"
                                    onChange={updateField}
                                    error={errors.address}
                                    value={values.address}
                                    isDisabled={isLoading}
                                />
                            </div>
                            <div className="col-md-6 mb-4 mt-4">
                                <div className="form-check d-flex justify-content-start">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={acceptTerms}
                                        onChange={() =>
                                            setAcceptTerms(!acceptTerms)
                                        }
                                        defaultValue
                                        id="form1Example3"
                                    />
                                    <label
                                        className="form-check-label pl-3"
                                        htmlFor="form1Example3"
                                    >
                                        I agree to the Terms of Service and
                                        Privacy Policy
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-6 mb-2" />
                            <div className="col-md-6">
                                <Button
                                    type="submit"
                                    isLoading={isLoading}
                                    isDisabled={!acceptTerms || isLoading}
                                    bgColor="#463c74"
                                    className="w-100 "
                                    variant="info"
                                >
                                    Sign up
                                </Button>
                            </div>
                         
                        </div>
                    </form>
                </div>
                
            </div>
        </AuthLayout>
    );
};
