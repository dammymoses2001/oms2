import moment from "moment";
import { Dropdown } from "react-bootstrap";

export const LeadsColumns = (data=[],tableDropDowns)=> {
   return [
        {
            name: "S/N",
            selector: (row,i) => (row?.ids),
            width:'70px'
        },
        {
            name: "Field Rep Name",
            selector: (row, index) => <span>{row?.user?.firstName} {row?.user?.lastName}</span>,
            // width: "80px"
        },
        {
            name: <div>Customer/Company</div>,
            selector: (row) => <span className="text-capitalize">{`${row?.customer?.businessName}`}</span>,
            width:'200px'
        },
        {
            name: "Time",
            selector: (row) => <span>{moment(row?.scheduleDate).format("MMM Do YY")}</span>
        },
    
        {
            name: "Reason",
            selector: (row) => <div className="">{`${row?.visitationReason}`}</div>
        },
        {
            name: "Location",
            selector: (row) => <span>{row?.customer?.lga}, {row?.customer?.state}</span>
        },
        {
            name: "Status",
            selector: (row) => <span>{row?.status}</span>
        },
        // {
        //     name: "Date Added",
        //     selector: (row) => moment(row?.createdAt).format("MMM Do YY")
        // },
    
        // {
        //     name: "Image ",
        //     selector: (row) => ""
        // },
        {
            name: "Actions",
            selector: (row) => row.authorized,
            cell: (row) => (
                <Dropdown>
                <Dropdown.Toggle className="dropdown-6 text-black border text-muted" >
                    ...
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {tableDropDowns?.map(({name,action})=>
                    
                    <Dropdown.Item
                        onClick={()=>action(row)}
                    >
                        {name}
                    </Dropdown.Item> )}
                    

                </Dropdown.Menu>
            </Dropdown>
            )
        }
    
   ]
}

export const FormInputValue = [
    {
        name: "name",
        label: "Name"
    },
    {
        name: "email",
        label: "Email"
    },
    {
        name: "address",
        label: "Address"
    },
    {
        name: "phoneNumber",
        label: "Phone Number"
    },
    {
        name: "companyName",
        label: "Company Name"
    },
    {
        name: "status",
        label: "Status",
        type:'select'
    },
    {
        name: "inputReason",
        label: "Input Reason"
    },
    {
        name: "contactedAt",
        label: "contacted At",
        type:'date'
    }
];