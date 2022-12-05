import React from "react";
import { useState } from "react";
import { AuthLayout, Button, Input } from "../../../components";
import { useAuth } from "../../../hooks";
import { toast } from "react-hot-toast";
import styled from "styled-components";

export const ConfirmNewPassword = () => {
    const {
        state: { isLoading },
        ResetPassword
    } = useAuth();
    const intialState = {
        token: "",
        confirmPassword: "",
        newPassword: ""
    };
    const [userData, setUserData] = useState(intialState);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value, userData);
        setUserData({ ...userData, [name]: value });
    };
    const handleSubmit = () => {
        const { token, confirmPassword, newPassword } = userData;

        if (!token || !confirmPassword || !newPassword) {
            return toast.error("All fields are Mandatory...");
        }
        if (confirmPassword !== newPassword) {
            return toast.error("Password Must be the Same....");
        }
        ResetPassword(userData);
    };

   
    // const { email, confirmPassword, newPassword } = userData;

    return (
        <AuthLayout>
            <div className="main-content confirmpassword pt-2 pt-md-5 pb-2 pb-md-5 mb-2 mb-md-5 min-vh-100 d-flex align-items-center">
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
                                    Check your Email and Enter your token and
                                    new Password
                                </h4>
                                <p
                                    className="w-100 px-sm-5 text-center mb-5 font-helvetica"
                                    style={{ color: "#7d7d7d" }}
                                >
                                    Enter your token and new password to recover
                                    your account
                                </p>
                                <form>
                                    {/* <input
                                    placeholder="Token"
                                    type="text"
                                    name={"token"}
                                    className={"py-1 text-black"}
                                    value={userData?.token}
                                    onChange={handleOnChange}
                                    /> */}
                                    <Input
                                        placeholder="Token"
                                        type="text"
                                        name={"token"}
                                        className={"py-1"}
                                        value={userData?.token}
                                        onChange={handleOnChange}
                                    />
                                    <Input
                                        placeholder="New Password"
                                        type="password"
                                        name={"newPassword"}
                                        value={userData?.newPassword}
                                        className={"py-0"}
                                        onChange={handleOnChange}
                                    />
                                    <Input
                                        placeholder="Confirm New Password"
                                        type="password"
                                        name={"confirmPassword"}
                                        value={userData?.confirmPassword}
                                        className={"py-0"}
                                        onChange={handleOnChange}
                                    />
                                    <div className="heading-title pb-3">
                                        <div className="container">
                                            <div className="row"></div>
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
                                            {isLoading
                                                ? "Loading..."
                                                : "Reset password"}
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
