import React, { useEffect, useState } from "react";
import {
    AppLayout,
    CardComp,
    ModalComp,
    TableCompData
} from "../../../components";
import { useAuth } from "../../../hooks";
import {  FormInputValue, LeadsColumns } from "./Data";
import useFormValidator from "use-form-input-validator";
import SimpleMap1 from "../../../components/map/Map";
import EditLeads from "./modules/EditLeads";
import moment from "moment";

export default function VisitTargets() {
    const {
        UpdateVisitation,
        AddLead,
        state: { check, isLoading },
        GetVisitation,
        getVisitationFuc:{allVisitation,isLoading:visitaionLoading},
        getVisitationLocationFuc:{allVisitationLocation,isLoading:allVisitationLocationLoader},
        GetVisitationLocations
    } = useAuth();
    // const today = moment();
    const currentDate = new Date().toISOString().substr(0, 10);


    const [modal, setModal] = useState(true);
    const [searchField, setSearchField] = useState();
    const [startDate, setStartDate] = useState(subtractTenDays());
    const [endDate, setEndDate] = useState(currentDate);
    //
    const [pageName,setPageName] =useState("View Visitations");
    const [userData,setUserData] =useState([]);
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
        if (check) {
            setModal(false);
            if(endDate && startDate){
                GetVisitation(startDate,endDate)
            }
        }
    }, [GetVisitation, check, endDate, startDate]);

   
    const tableDropDowns =[
        {
            name:'Change Staff Visitation Status',
            action:(row)=>{
                setModal(true);
                setUserData({
                    id:row?.id,
                    name:`${row?.user?.firstName} ${row?.user?.lastName}`,
                    companyName:row?.customer?.businessName,
                    visitationReason:row?.visitationReason,
                    location:row?.customer?.lga,
                    status:row?.status,
                    scheduleDate:moment(row?.scheduleDate).format("MMM Do YY"),
                    scheduleDateNormal:row?.scheduleDate
                })
                console.log(row)
                // UpdateField(row)
                 setPageName('Edit Visitation Detail')
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
        name: { checks: "required", value: "" },
        email: { checks: "required|email", value: "" },
        address: { checks: "required|min:6", value: "" },
        // expiringDate: { checks: "required", value: "" },
        phoneNumber: { checks: "required|min:6|num", value: "" },
        companyName: { checks: "required|min:3", value: "" },
        status: { checks: "required", value: "" },
        inputReason: { checks: "required|min:6", value: "t" },
        contactedAt: { checks: "required|date", value: "" }
    });

    const handleSubmitVisitation= (e) => {
        e.preventDefault();
        const payload ={
            id:userData?.id,
            "visitationReason":userData?.visitationReason,
    "scheduleDate":userData?.scheduleDateNormal,
    "status":userData?.status,
        }
        console.log(payload,'handleSubmitVisitation')

      UpdateVisitation(payload)
        // if (isAllFieldsValid()) {
        //     AddLead(values);
        // }
        // console.log(errors);
    };
    const handleOnchange = (e) =>{
        const {value,name} =e.target;
        setUserData({...userData,[name]:value})
    }

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
        },{
            name:'Edit Visitation Detail',
            component:<EditLeads  
            FormInputValue={FormInputValue}
            errors={errors}
            handleOnchange={handleOnchange}
            handleSubmitLead={handleSubmitVisitation}
            userData={userData}
            isLoading={isLoading}
            />
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
                        data={newAllVisitation?.filter(robot => robot?.user?.firstName.toLowerCase().match(searchField?.toLowerCase())||robot?.user?.lastName.toLowerCase().match(searchField?.toLowerCase())||robot?.status.toLowerCase().match(searchField?.toLowerCase())||robot?.customer?.businessName.toLowerCase().match(searchField?.toLowerCase())).reverse()}
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
