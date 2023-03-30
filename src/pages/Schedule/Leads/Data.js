import moment from "moment";
import { Dropdown } from "react-bootstrap";

export const LeadsColumns =(data=[])=>{ return [
    // {
    //     name: "#",
    //     selector: (row) => console.log(row.length, "row")
    // },
    {
        name: "Lead Id",
        selector: (row, index) => <span>{(data?.findIndex((item)=>item?.id === row?.id)+1)}</span>,
        // width: "80px"
    },
    {
        name: "Lead Name",
        selector: (row) => <span className="text-capitalize">{`${row?.name}`}</span>
    },
    {
        name: "Contact Address",
        selector: (row) => <span>{`${row?.phoneNumber}`}</span>
    },

    {
        name: "Lead Status",
        selector: (row) => <div className="border border-1 rounded-pill px-3">{`${row?.status}`}</div>
    },
    {
        name: "Lead source",
        selector: (row) => <span>{`-`}</span>
    },
    {
        name: "Assigned Staff",
        selector: (row) => <span>{`-`}</span>
    },
    {
        name: "Date Added",
        selector: (row) => moment(row?.createdAt).format("MMM Do YY")
    },

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
                    {/* <Dropdown.Item
                        onClick={() => {
                           
                        }}
                    >
                        Edit
                    </Dropdown.Item> */}

                    {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                </Dropdown.Menu>
            </Dropdown>
        )
    }
]}

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