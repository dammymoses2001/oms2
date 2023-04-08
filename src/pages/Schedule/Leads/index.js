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
import { v4 as uuidv4 } from 'uuid';
import { convertDate } from "../../../utils";
import EditLeads from "./modules/EditLeads";
export default function Leads() {
    const {
        GetLeads,
        AddLead,
        getLeadsFuc: { leads, isLoading: leadLoader },
        state:{isLoading:deleteLoader},
        DeleteLead,
        state: { check, isLoading }
    } = useAuth();
    const [userData,setUserData] =useState([]);
    const [modal, setModal] = useState(false);
    const [pageName,setPageName] =useState("Delete Leads")
    const [searchField, setSearchField] = useState("");
    // console.log(leads, "GetLeads");

    useEffect(() => {
        GetLeads();
    }, [GetLeads]);
    useEffect(() => {
        if (check) {
            setModal(false);
        }
    }, [check]);

    const { values, errors, updateField, isAllFieldsValid} = useFormValidator({
        name: { checks: "required", value: "" },
        email: { checks: "required|email", value: "" },
        address: { checks: "required|min:6", value: "" },
        // expiringDate: { checks: "required", value: "" },
        phoneNumber: { checks: "required|min:6|num", value: "" },
        companyName: { checks: "required|min:3", value: "" },
        status: { checks: "required", value: "" },
        inputReason: { checks: "required|min:6", value: "" },
        contactedAt: { checks: "required|date", value: "" },
     
        
    },);

   
    
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
        console.log(e,userData);
        e.preventDefault();
        
        // if (isAllFieldsValid()) {
            AddLead(userData);
        // }
     
    };

    const UpdateField = (row) => {
        setUserData(row)
    }

    const tableDropDowns =[
        {
            name:'Change leads Status',
            action:(row)=>{
                setModal(true);
                UpdateField(row)
                setPageName('Edit Lead Detail')
            }
        },
        {
            name:'Delete Leads',
            action:(row)=>{
                setModal(true);
                UpdateField(row)
                setPageName('Delete Leads')
            }
        }
    ]

    const handleOnchange = (e) =>{
        const {value,name} =e.target;
        setUserData({...userData,[name]:value})
    }
   

    const newLead = leads?.map((item, index) => {
        return { ...item, ids:leads?.length-index};
      });

      const modalPage =[
        {
            name:'Edit Lead Detail',
            component:<EditLeads 
            FormInputValue={FormInputValue}
            errors={errors}
            handleOnchange={handleOnchange}
            handleSubmitLead={handleSubmitLead}
            userData={userData}
            isLoading={isLoading}
            />
        },
        {
            name:'Delete Leads',
            component:<div className="text-center">
                    <h3 className="text-center">Delete Lead</h3>
                    <div>Are you sure you want to delete "{userData?.name}" lead?</div>
                    <div className="mt-4 d-flex gap-4 justify-content-center">
                    <button
                        onClick={() => DeleteLead(userData)}
                        className="btn me-2 bg bg-danger text-white h6"
                    >
                       {deleteLoader?"loading":"Delete"} 
                    </button>
                    <button
                        onClick={() => setModal(false)}
                        className="btn me-2 bg bg-1 h6"
                    >
                        Cancel
                    </button>
                    </div>
            </div>
        }
      ]

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
                {/* <div className="text-end">
                    <button
                        onClick={() => setModal(true)}
                        className="btn me-2 bg bg-1 h6"
                    >
                        Add Leads
                    </button>
                </div> */}
                {/*  */}
                <section>
                    <TableCompData
                        loader={leadLoader}
                        columns={LeadsColumns(leads,tableDropDowns)}
                        data={newLead?.filter((robot) =>
                            robot.name
                                .toLowerCase()
                                .match(searchField?.toLowerCase())
                        ).reverse()}
                        pagination

                    />
                </section>
            </section>
            <ModalComp
            size={pageName==="Delete Leads"?"md":"lg"}
                show={modal}
                handleClose={setModal}
                title={pageName==="Delete Leads"?false:<h4>Update Leads</h4>}
                bodyText={
                    modalPage?.find((item)=>item?.name === pageName)?.component
                }
            />
        </AppLayout>
    );
}
