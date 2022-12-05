import React, { useEffect } from "react";
import { Link,  useNavigate } from "react-router-dom";
import styled  from "styled-components";
import useFormValidator from "use-form-input-validator";
import { ReactComponent as GmailIcon } from "../../../assets/icons/gmail.svg";
import { AuthLayout, Button, Input } from "../../../components";
import { useAuth } from "../../../hooks";


const Style = styled.div`
min-height:100vh;
`;

export const Login = () => {
    const navigate = useNavigate();
    // const from = location.state?.from?.pathname || "/";
    const {
        login,
        state: { isLoading,isLoggedIn }
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
            login({ ...values });
        }
    };

    
    useEffect(() => {
       
        if (isLoggedIn === true) {
            navigate("/");
        }
       
    }, [isLoggedIn, navigate]);


    return (
        <Style>
            <AuthLayout>
          
                <div className="main-content pt-2 pt-md-5 pb-2 pb-md-5">
                    <div className="container">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                <div className="p-3 text-left">
                                    <h3 className="w-100 font-helvetica font-weight-bold text-center mb-3">
                                        Log in
                                    </h3>
                                    <p className="text-center mb-5 ">
                                        Enter your email address and password to access unlimited pharmaceutical brand SKU
                                    </p>
                                    <form onSubmit={handleLogin}>
                                        <Input
                                            name="email"
                                            placeholder="Email"
                                            onChange={updateField}
                                            error={errors.email}
                                            isDisabled={isLoading}
                                        />

                                        <Input.Password
                                            name="password"
                                            placeholder="Password"
                                            onChange={updateField}
                                            error={errors.password}
                                            isDisabled={isLoading}
                                        />
                                        <div className="d-flex align-items-center justify-content-between mb-4">
                                            {/* Checkbox */}
                                            <div className="form-check d-flex justify-content-start">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue
                                                    id="form1Example3"
                                                />
                                                <label
                                                    className="form-check-label pl-3"
                                                    htmlFor="form1Example3"
                                                >
                                                    Keep me signed in
                                                </label>
                                            </div>
                                            <div className=" form-check d-flex justify-content-start ">
                                                <Link
                                                    to="/forgot-password"
                                                    className="text-muted"
                                                >
                                                    Forgot Password?
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="row mt-5 mb-3">
                                            <div className="col-md-12 mb-3">
                                                <Button
                                                    type="submit"
                                                    bgColor="#463c74"
                                                    className="w-100 "
                                                    isLoading={isLoading}
                                                    variant="info"
                                                >
                                                    Sign in
                                                </Button>
                                            </div>
                                            <div className="col-6 mb-2">
                                                <Button
                                                    type="button"
                                                    bgColor="#3b5998"
                                                    className="w-100"
                                                    variant="info"
                                                >
                                                    <i className="fab fa-facebook-f mr-3" />
                                                    Facebook
                                                </Button>
                                            </div>
                                            <div className="col-6">
                                                <Button
                                                    borderColor="#dd4b39"
                                                    className="w-100"
                                                    variant="danger"
                                                    color="#000"
                                                    bgColor="#fff"
                                                    type="button"
                                                >
                                                    <GmailIcon className="mr-3" />
                                                    Gmail
                                                </Button>
                                            </div>
                                        </div>
                                    </form>
                                    <p className="col-12 font-helvetica text-center text-muted mt-5 mb-0">
                                        Not a member yet?{" "}
                                        <Link
                                            to="/register"
                                            className="font-weight-bold pl-3 text-body"
                                        >
                                            Sign up
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          
            </AuthLayout>
        </Style>
    );
};
