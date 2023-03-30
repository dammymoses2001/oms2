import React, { useEffect, useState } from "react";
import {
    AppLayout,
    Button,
    Input,
    ModalComp,
    SelectComp,
    TableCompData
} from "../../../components";
import { Input2 } from "../../../components/form/Input/input";
import { useAuth } from "../../../hooks";
import { FormInputValue, LeadsColumns } from "./Data";
import useFormValidator from "use-form-input-validator";
import { Select } from "../../../components/form/Input/Select";

export default function Leads() {
    const {
        GetLeads,
        AddLead,
        getLeadsFuc: { leads, isLoading: leadLoader },
        state: { check, isLoading }
    } = useAuth();
    const [modal, setModal] = useState(false);
    const [searchField, setSearchField] = useState("");
    console.log(leads, "GetLeads");

    useEffect(() => {
        GetLeads();
    }, [GetLeads]);
    useEffect(() => {
        if (check) {
            setModal(false);
        }
    }, [check]);

    const { values, errors, updateField, isAllFieldsValid } = useFormValidator({
        name: { checks: "required", value: "" },
        email: { checks: "required|email", value: "" },
        address: { checks: "required|min:6", value: "" },
        // expiringDate: { checks: "required", value: "" },
        phoneNumber: { checks: "required|min:6|num", value: "" },
        companyName: { checks: "required|min:3", value: "" },
        status: { checks: "required", value: "" },
        inputReason: { checks: "required|min:6", value: "" },
        contactedAt: { checks: "required|date", value: "" }
    });
    // const { values, errors, updateField, isAllFieldsValid } = useFormValidator({
    //     name: { checks: "required", value: "Bola" },
    //     email: { checks: "required|email", value: "sam@gmail.com" },
    //     address: { checks: "required|min:6", value: "no 2 satola" },
    //     // expiringDate: { checks: "required", value: "" },
    //     phoneNumber: { checks: "required|min:6|num", value: "0803422915" },
    //     companyName: { checks: "required|min:3", value: "test" },
    //     status: { checks: "required", value: "New" },
    //     inputReason: { checks: "required|min:6", value: "testing sake" },
    //     contactedAt: { checks: "required|date", value: "" }
    // });

    const handleSubmitLead = (e) => {
        e.preventDefault();
        if (isAllFieldsValid()) {
            AddLead(values);
        }
        console.log(errors);
    };

    return (
        <AppLayout>
            <section className="mt-3">
                <section className="row justify-content-between align-items-center mb-3">
                    <div className="col-lg-4">
                        <h5 className="color-1 ">Leads </h5>
                    </div>
                    <div className="col-lg-4">
                        <input
                            onChange={(e) => setSearchField(e?.target?.value)}
                            className="w-100 border border-1 p-2 rounded"
                            placeholder="Search Leads"
                        />
                    </div>
                </section>
                <div className="text-end">
                    <button
                        onClick={() => setModal(true)}
                        className="btn me-2 bg bg-1 h6"
                    >
                        Add Leads
                    </button>
                </div>
                {/*  */}
                <section>
                    <TableCompData
                        loader={leadLoader}
                        columns={LeadsColumns(leads)}
                        data={leads?.filter((robot) =>
                            robot.name
                                .toLowerCase()
                                .match(searchField?.toLowerCase())
                        )}
                        pagination
                    />
                </section>
            </section>
            <ModalComp
                show={modal}
                handleClose={setModal}
                title={<h4>Add Leads</h4>}
                bodyText={
                    <form onSubmit={handleSubmitLead}>
                        <div className="row gx-5 gy-3">
                            {FormInputValue?.map((item, i) =>
                                item?.type === "select" ? (
                                    <div className="col-lg-6">
                                        <SelectComp
                                            labelclassname="h6 fw-medium"
                                            name={item?.name}
                                            value={values[item?.name]}
                                            error={errors[item?.name]}
                                            onChange={updateField}
                                            isDisabled={false}
                                            label={item?.label}
                                            options={[
                                                "In Progress",
                                                "New",
                                                "Open"
                                            ]}
                                        />
                                    </div>
                                ) : (
                                    <div className="col-lg-6">
                                        <Input.Input2
                                            required
                                            name={item?.name}
                                            label={item?.label}
                                            labelclassname="h6 fw-medium"
                                            onChange={updateField}
                                            inputclassname="py-2 border px-2 text-black  "
                                            value={values[item?.name]}
                                            error={errors[item?.name]}
                                            isDisabled={false}
                                            type={item?.type}
                                        />
                                    </div>
                                )
                            )}

                            <div className="mt-5 col-12 text-end">
                                <button>
                                    {isLoading ? "Loading..." : "Add Leads"}
                                </button>
                            </div>
                        </div>
                    </form>
                }
            />
        </AppLayout>
    );
}
