import React, { useEffect, useState } from "react";
import {
    AppLayout,
    CardComp,
    Input,
    ModalComp,
    SelectComp,
    TableCompData
} from "../../../components";
import { useAuth } from "../../../hooks";
import { FormInputValue, LeadsColumns } from "./Data";
import useFormValidator from "use-form-input-validator";

export default function VisitTargets() {
    const {
        GetLeads,
        AddLead,
        getLeadsFuc: { leads, isLoading: leadLoader },
        state: { check, isLoading },
        GetVisitation,
        getVisitationFuc:{allVisitation,isLoading:visitaionLoading}
    } = useAuth();
    // const today = moment();
    const currentDate = new Date().toISOString().substr(0, 10);

    const [modal, setModal] = useState(false);
    const [searchField, setSearchField] = useState();
    const [startDate, setStartDate] = useState(subtractTenDays());
    const [endDate, setEndDate] = useState(currentDate);
// alert(moment('MMMM Do YYYY').subtract(10, 'days').calendar())
    useEffect(() => {
        if(endDate && startDate){
            GetVisitation(startDate,endDate)
        }
    }, [GetVisitation]);
    // alert(Date.parse(startDate) / 1000)
    function subtractTenDays() {
        // Get the current date
        const currentDate = new Date();
      
        // Subtract 10 days from the current date
        const tenDaysAgo = new Date(currentDate.getTime() - (10 * 24 * 60 * 60 * 1000));
      
        // Return the new date in international standard format
        return tenDaysAgo.toISOString().split('T')[0];
      }

    useEffect(() => {
        GetLeads();
    }, [GetLeads]);

    useEffect(() => {
        if (check) {
            setModal(false);
        }
    }, [check]);

    // const { values, errors, updateField, isAllFieldsValid } = useFormValidator({
    //     name: { checks: "required", value: "" },
    //     email: { checks: "required|email", value: "" },
    //     address: { checks: "required|min:6", value: "" },
    //     // expiringDate: { checks: "required", value: "" },
    //     phoneNumber: { checks: "required|min:6|num", value: "" },
    //     companyName: { checks: "required|min:3", value: "" },
    //     status: { checks: "required", value: "" },
    //     inputReason: { checks: "required|min:6", value: "" },
    //     contactedAt: { checks: "required|date", value: "" }
    // });
    const { values, errors, updateField, isAllFieldsValid } = useFormValidator({
        name: { checks: "required", value: "Bola" },
        email: { checks: "required|email", value: "sam@gmail.com" },
        address: { checks: "required|min:6", value: "no 2 satola" },
        // expiringDate: { checks: "required", value: "" },
        phoneNumber: { checks: "required|min:6|num", value: "0803422915" },
        companyName: { checks: "required|min:3", value: "test" },
        status: { checks: "required", value: "New" },
        inputReason: { checks: "required|min:6", value: "testing sake" },
        contactedAt: { checks: "required|date", value: "" }
    });

    const handleSubmitLead = (e) => {
        e.preventDefault();
        if (isAllFieldsValid()) {
            AddLead(values);
        }
        console.log(errors);
    };

    const handleSubmit = () =>{
        if(endDate && startDate){
            GetVisitation(startDate,endDate)
        }
    }

    return (
        <AppLayout>
            <section className="mt-3">
                <section className="row justify-content-between align-items-center mb-3">
                    <div className="col-lg-4">
                        <h5 className="color-1 ">Visit Targets </h5>
                    </div>
                    <div className="col-lg-4">
                        <input
                            onChange={(e) => setSearchField(e?.target?.value)}
                            className="w-100 border border-1 p-2 rounded"
                            placeholder="search visit"
                        />
                    </div>
                </section>
                <div className="text-end d-flex gap-3 justify-content-end mb-3 align-items-center">
                    {/* <button
                        onClick={() => setModal(true)}
                        className="btn me-2 bg bg-1 h6"
                    >
                        Add Leads
                    </button> */}
                    <div className="col-3 col-lg-2 ">
                        <input
                            type="date"
                            class="form-control border border-secondary mt-1"
                            id="inpt"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </div>
                    <div className="col-3 col-lg-2">
                        <input
                            type="date"
                            class="form-control border border-secondary mt-1"
                            id="inpt"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>
                    <div className=" col-auto">
                                    <button
                                     onClick={handleSubmit}
                                        id="submitbtn"
                                        className="btn bg-6 text-white "
                                    >
                                        {" "}
                                        Filter{" "}
                                    </button>
                                </div>
                </div>
                {/*  */}
                <section>
                    <CardComp bodyText={<TableCompData
                        loader={visitaionLoading}
                        columns={LeadsColumns(allVisitation)}
                        data={allVisitation?.filter(robot => robot?.user?.firstName.toLowerCase().match(searchField?.toLowerCase())||robot?.user?.lastName.toLowerCase().match(searchField?.toLowerCase())||robot?.customer?.businessName.toLowerCase().match(searchField?.toLowerCase()))}
                        pagination
                    />}/>
                    
                  
                </section>
            </section>
            {/* <ModalComp
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
            /> */}
        </AppLayout>
    );
}
