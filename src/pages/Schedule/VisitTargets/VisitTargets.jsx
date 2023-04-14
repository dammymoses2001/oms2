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
import SimpleMap1 from "../../../components/map/Map";

export default function VisitTargets() {
    const {
        GetLeads,
        AddLead,
        getLeadsFuc: { leads, isLoading: leadLoader },
        state: { check, isLoading },
        GetVisitation,
        getVisitationFuc:{allVisitation,isLoading:visitaionLoading},
        getVisitationLocationFuc:{allVisitationLocation,isLoading:allVisitationLocationLoader},
        GetVisitationLocations
    } = useAuth();
    // const today = moment();
    const currentDate = new Date().toISOString().substr(0, 10);

    console.log(allVisitationLocation,'getVisitationLocationFuc')

    const [modal, setModal] = useState(true);
    const [searchField, setSearchField] = useState();
    const [startDate, setStartDate] = useState(subtractTenDays());
    const [endDate, setEndDate] = useState(currentDate);
    //
    const [pageName,setPageName] =useState("View Visitations")
// alert(moment('MMMM Do YYYY').subtract(10, 'days').calendar())
    useEffect(() => {
        if(endDate && startDate){
            GetVisitation(startDate,endDate)
        }
    }, [GetVisitation, endDate, startDate]);
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

   
    const tableDropDowns =[
        {
            name:'Change Staff Status',
            action:(row)=>{
                setModal(true);
                // UpdateField(row)
                // setPageName('Edit Lead Detail')
            }
        },
        {
            name:'See Staff Visitations',
            action:(row)=>{
                setModal(true);
                startDate&&endDate&&GetVisitationLocations(row?.userId,startDate,endDate)
                // UpdateField(row)
                setPageName('View Visitations')
            }
        }
    ]
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

    const newAllVisitation = allVisitation?.map((item, index) => {
        return { ...item, ids:allVisitation?.length-index};
      });

      const modalPage =[
        {
            name:'View Visitations',
            component:<div>
                    <SimpleMap1 locationsArray={allVisitationLocation}/>
            </div>
        }
      ]


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
                        columns={LeadsColumns(allVisitation,tableDropDowns)}
                        data={newAllVisitation?.filter(robot => robot?.user?.firstName.toLowerCase().match(searchField?.toLowerCase())||robot?.user?.lastName.toLowerCase().match(searchField?.toLowerCase())||robot?.customer?.businessName.toLowerCase().match(searchField?.toLowerCase())).reverse()}
                        pagination
                    />}/>
                    
                  
                </section>
            </section>
            <ModalComp
            size={"lg"}
                show={modal}
                handleClose={()=>setModal(false)}
                title={pageName}
                bodyText={
                    modalPage?.find((item)=>item?.name === pageName)?.component
                }
            />
        </AppLayout>
    );
}
