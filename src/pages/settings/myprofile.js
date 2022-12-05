import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppLayout, Button, CardComp, TopNav } from "../../components";
import { Basic2 } from "../../components/form/DropandDrag2";
import { Input2 } from "../../components/form/Input/input";
import { useAuth } from "../../hooks";

export const Myprofile = () => {
    const [userData, setUserData] = useState();
    const [, setPicture] = useState(null);
    const {
        state: { data },
        UpdateSupplierProfileFunc
    } = useAuth();

    useEffect(() => {
        setUserData(data);
    }, [data]);

    const handleUpdateProfile = () => {
        const value = {
            address: userData?.address,

            email: userData?.email,

            firstName: userData?.firstName,

            lastName: userData?.lastName,
            phone: userData?.phone
        };
        // console.log(data, userData);
        UpdateSupplierProfileFunc(value);
    };
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value, userData);
        setUserData({ ...userData, [name]: value });
    };

    return (
        <AppLayout>
            <div className="mb-3">
                <TopNav
                    TextComp={<span className="color-1 h4">Edit Profile</span>}
                    RightComp={
                        <div className="color-2">
                            <Link to="#" className="mr-2 btn bg-1 h6">
                                Share Invite
                            </Link>
                        </div>
                    }
                />
            </div>
            <CardComp
                bodyText={
                    <div className="px-4 py-5">
                        <div className="row  mb-5">
                            <div className="col-lg-4">
                                <h5 className="text-muted fw-1">
                                    Profile picture
                                </h5>
                            </div>
                            <div className="col-lg-8">
                                <Basic2 setPicture={setPicture} />
                            </div>
                        </div>
                        <div className="row align-items-center mb-5">
                            <div className="col-lg-4">
                                <h5 className="text-muted fw-1">{""}</h5>
                            </div>
                            <div className="col-lg-3 text-center">
                                <div className="shadow">
                                    <img
                                        src={
                                            "https://thumbs.dreamstime.com/b/african-american-doctor-11359664.jpg"
                                        }
                                        alt=""
                                        style={{
                                            height: "200px",
                                            maxWidth: "200px",
                                            objectFit: "contain"
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row align-items-center mb-5">
                            <div className="col-lg-4">
                                <h5 className="text-muted fw-1">Name</h5>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-6">
                                        <Input2
                                            inputclassname={
                                                "border-top-0 border-end-0 border-start-0 border-1 text-black text-capitalize h50 fw-1"
                                            }
                                            value={`${userData?.firstName}`}
                                            onChange={handleOnChange}
                                            name="firstName"
                                            className={""}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <Input2
                                            inputclassname={
                                                "border-top-0 border-end-0 border-start-0 border-1 text-black text-capitalize h50 fw-1"
                                            }
                                            value={`${userData?.lastName}`}
                                            onChange={handleOnChange}
                                            name="lastName"
                                            className={""}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row align-items-center mb-5">
                            <div className="col-lg-4">
                                <h5 className="text-muted fw-1">
                                    Email Address
                                </h5>
                            </div>
                            <div className="col-lg-8">
                                <Input2
                                    inputclassname={
                                        "border-top-0 border-end-0 border-start-0 border-1 text-black text-capitalize h50 fw-1"
                                    }
                                    value={`${userData?.email}`}
                                    onChange={handleOnChange}
                                    name="email"
                                />
                            </div>
                        </div>
                        <div className="row align-items-center mb-5">
                            <div className="col-lg-4">
                                <h5 className="text-muted fw-1">
                                    Phone Number
                                </h5>
                            </div>
                            <div className="col-lg-8">
                                <Input2
                                    inputclassname={
                                        "border-top-0 border-end-0 border-start-0 border-1 text-black text-capitalize h50 fw-1"
                                    }
                                    value={userData?.phone || "Not available"}
                                    onChange={handleOnChange}
                                    name="phone"
                                />
                            </div>
                        </div>
                        <div className="row align-items-center mb-5">
                            <div className="col-lg-4">
                                <h5 className="text-muted fw-1">
                                    Home Address
                                </h5>
                            </div>
                            <div className="col-lg-8">
                                <Input2
                                    inputclassname={
                                        "border-top-0 border-end-0 border-start-0 border-1 text-black text-capitalize h50 fw-1"
                                    }
                                    value={userData?.address || "Not available"}
                                    onChange={handleOnChange}
                                    name="address"
                                />
                            </div>
                        </div>
                        <div className="row align-items-center mb-5">
                            <div className="col-lg-4">
                                <h5 className="text-muted fw-1">Role</h5>
                            </div>
                            <div className="col-lg-8">
                                <Input2
                                    inputclassname={
                                        "border-top-0 border-end-0 border-start-0 border-1 text-black text-capitalize h50 fw-1"
                                    }
                                    value={userData?.role || "Not available"}
                                    onChange={handleOnChange}
                                    name="role"
                                />
                            </div>
                        </div>

                        <div className="text-end">
                            <Button
                                className=" bg-6 rounded px-4 py-3"
                                onClick={handleUpdateProfile}
                            >
                                <h6 className="mb-0 text-white">
                                    {" "}
                                    Update Profile
                                </h6>
                            </Button>
                        </div>
                    </div>
                }
            />
        </AppLayout>
    );
};
