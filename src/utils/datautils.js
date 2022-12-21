import { GiSwapBag } from "react-icons/gi";
import { BsCart3 } from "react-icons/bs";
import { FiTrendingUp } from "react-icons/fi";
import Product1 from "../assets/images/product-1.png";
import defaultLogo1 from "../assets/images/logo.jpg";
import copy from "copy-to-clipboard";
import toast from "react-hot-toast";
import { Dropdown } from "react-bootstrap";
import moment from "moment";
import { formatMoney } from "./currencyFormat";
import { useAuth } from "../hooks";
import { colors } from "@material-ui/core";

export const refererHeaderData = [
    {
        name: "Name"
    },
    {
        name: "location"
    },
    {
        name: "Views"
    },
    {
        name: "Sales"
    },
    {
        name: "Conversion"
    },
    {
        name: "Total"
    }
];

export const mainreferenceData = [
    {
        name: "Joshua",
        location: "Lekki",
        views: "375",
        sales: "752",
        conversion: "43%",
        total: "NGN 19,291"
    },
    {
        name: "Adeyemi",
        location: "Egbeda",
        views: "375",
        sales: "752",
        conversion: "43%",
        total: "NGN 19,291"
    },
    {
        name: "Chike",
        location: "VI",
        views: "375",
        sales: "752",
        conversion: "43%",
        total: "NGN 19,291"
    }
];

export const ProductData = [
    {
        icon: <GiSwapBag className="h5 color-2 mb-0" />,
        sales: "100,000",
        title: "Total Revenue"
    },
    {
        icon: <BsCart3 className="h5 color-2 mb-0" />,
        sales: "3,000",
        title: "Complete Sales"
    },
    {
        icon: <FiTrendingUp className="h5 text-success  mb-0" />,
        sales: "+2.0%",
        title: "Growth",
        gain: true
    }
];

export const topProductHeader = [
    {
        name: "PRODUCT NAME"
    },

    {
        name: "Product SKU"
    },
    {
        name: "AVAILABILITY"
    },
    {
        name: "TOTAL"
    }
];

export const topAllProductHeader = [
    {
        name: "#"
    },
    {
        name: "Product Name"
    },
    {
        name: "Category"
    },
    {
        name: "Product SKU"
    },
    {
        name: "Expiring date "
    },
    {
        name: "Price"
    },
    {
        name: "Image"
    },
    {
        name: "Action"
    }
];
export const topProductData = [
    {
        product: "Augmentin",
        image: Product1,
        sku: "GTY123QQ",
        inStock: "320",
        total: "29,000"
    },
    {
        product: "Augmentin",
        image: Product1,
        sku: "GTY123QQ",
        inStock: "3",
        total: "29,000"
    },
    {
        product: "Augmentin",
        image: Product1,
        sku: "GTY123QQ",
        inStock: "0",
        total: "29,000"
    },
    {
        product: "Augmentin",
        image: Product1,
        sku: "GTY123QQ",
        inStock: "320",
        total: "29,000"
    }
];

export const refererDataFunc = (data) => {
    return data.map((item, index) => (
        <tr key={index}>
            <td>{item?.location}</td>
            <td>{item?.views}</td>
            <td>{item?.sales}</td>
            <td>{item?.conversion}</td>
            <td>{item?.total}</td>
        </tr>
    ));
};

export const checkStock = (stock) => {
    if (stock < 1) {
        return "bg-danger";
    }
    if (stock > 100) {
        return "bg-success";
    }
    if (stock < 100) {
        return "bg-warning";
    }
};

export const OrderHeader = [
    {
        name: "#"
    },
    {
        name: "Company/Client"
    },
    {
        name: "Order ID"
    },
    {
        name: "Order Date"
    },
    {
        name: "Order State"
    },
    {
        name: "Action"
    }
    // {
    //     name:'Client Status',
    // },
];

export const customerColumns = [
    // {
    //     name: "#",
    //     selector: (row) => console.log(row.length, "row")
    // },
    {
        name: "No.",
        selector: (row, index) => <span>{index + 1}</span>,
        width: "80px"
    },
    {
        name: "Business Name",
        selector: (row) => <span>{`${row?.businessName}`}</span>
    },
    {
        name: "Contact Name",
        selector: (row) => <span>{`${row?.contactPersonName}`}</span>
    },

    {
        name: "LGA",
        selector: (row) => <span>{`${row?.lga}`}</span>
    },
    {
        name: "State",
        selector: (row) => <span>{`${row?.state}`}</span>
    },
    {
        name: "Phone Number",
        selector: (row) => <span>{`${row?.businessPhoneNumber}`}</span>
    },
    {
        name: "Added At",
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
                <Dropdown.Toggle className="dropdown-6 text-black border text-muted">
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
];

export const CustomerHeader = [
    {
        name: "#"
    },
    {
        name: "Customer Name"
    },
    {
        name: "Creates at"
    },
    {
        name: "Location"
    },
    {
        name: "Status"
    },
    {
        name: "Rating"
    },
    {
        name: "Action"
    }
    // {
    //     name:'Client Status',
    // },
];
export const CustomerOrderHeader = [
    {
        name: "#"
    },

    {
        name: "Time"
    },
    {
        name: "Tracking_Id"
    },
    {
        name: "Price"
    },
    {
        name: "Status"
    },
    {
        name: "Action"
    }
    // {
    //     name:'Client Status',
    // },
];
export const ProductHeader = [
    {
        name: "#"
    },

    {
        name: "Product Name"
    },
    {
        name: "Product Sku"
    },
    {
        name: "Product Composition"
    },
    {
        name: "Price"
    },
    {
        name: "Quantity Bought"
    }

    // {
    //     name:'Client Status',
    // },
];

export const CustomerData = [
    {
        name: "Bola Pharmacy",
        createdat: "Feb 5th 2022",
        location: "lagos",
        status: "active",
        rating: "-"
    },
    {
        name: "Divine Pharmacy",
        createdat: "Apr 3th 2022",
        location: "lagos",
        status: "active",
        rating: "-"
    }
];

export const OrderData = [
    {
        company: "Lagos Pharmacy",
        orderid: "#123456",
        orderdate: "March 15,2021",
        orderState: "pending",
        status: 1
    },
    {
        company: "Lagos Pharmacy",
        orderid: "#123456",
        orderdate: "March 15,2021",
        orderState: "pending",
        status: 2
    },
    {
        company: "Lagos Pharmacy",
        orderid: "#123456",
        orderdate: "March 15,2021",
        orderState: "pending",
        status: 3
    }
];

export const InvoiceHeader = [
    {
        name: <span className="fw-1 text-muted">Item Name</span>
    },
    {
        name: <span className="fw-1 text-muted">Quantity</span>
    },
    {
        name: <span className="fw-1 text-muted">Stock Availability</span>
    }
];

export const InvoiceData = [
    {
        itemName: "Augmentin",
        quantity: "2 packet",
        stock: "20 Packet"
    }
];

export const InvoiceHeaderData = [
    {
        name: <span className="fw-1 text-muted">Item </span>
    },
    {
        name: <span className="fw-1 text-muted">Description</span>
    },
    {
        name: <span className="fw-1 text-muted">Quantity</span>
    },
    {
        name: <span className="fw-1 text-muted">Price</span>
    }
];

export const InvoiceDataDumy = [
    {
        item: "Augmentin",
        desc: "Lorem ipsum dolor sit amet Consecteur",
        quantity: "20",
        price: "NGN 3000"
    }
];

export const defaultLogo = defaultLogo1;

export const handleSuplierlink = (state) => {
    copy(
        `http://app.pharmaserv.ng/supplier/products/${state?.data?.supplierInformation[0]?._id}`
    );
    toast.success("link copy successfully...");
};

export const OrderStatusColor = (status) => {
    switch (status) {
        case "approved":
            return "text-success";
        case "pending":
            return "text-primary";
        case "declined":
            return "text-danger";
        default:
        // code block
    }
};

export const SortOrder = (dataset) => {
    let datasetToSort;

    if ("order" in dataset) {
        datasetToSort = dataset.order;
    } else {
        datasetToSort = dataset;
    }

    return datasetToSort.sort((a, b) => {
        let bDate = new Date(b.createdAt).getTime();
        let aDate = new Date(a.createdAt).getTime();

        if (bDate > aDate) {
            return 1;
        } else if (bDate < aDate) {
            return -1;
        } else {
            return 0;
        }
    });
};

export const handleTotalQuantity = (productArray) => {
    let sum = 1;
    productArray?.map((item) => (sum = sum + item?.quantity));
    return sum;
};

export const handleCustomerCSvData = (item) => {
    const newArray = [];
    item?.map((row) =>
        newArray.push({
            "Business Name": row?.businessName,
            "Contact Name": row?.contactPersonName,
            LGA: row?.lga,
            State: row?.state,
            "Phone Number": row?.businessPhoneNumber,
            "Added At": moment(row?.createdAt).format("MMM Do, YY")

            // "Status  ":OrderStatusColor(row?.status?.toLowerCase()),
        })
    );
    // console.log(newArray,'newArray')
    return newArray;
};

export const handleProductData = (item) => {
    const newArray = [];
    if (item?.length) {
        item?.map((row) =>
            newArray.push({
                Product: `${row?.product?.productName || "-"}`,
                Composition: row?.product?.composition || "-",
                Quantity: row?.quantity,
                "Unit price": formatMoney(row?.product?.costPerUnit),

                Total: formatMoney(row?.price)
            })
        );
        return newArray;
    }
};

export const productCustomerCSvData = (item) => {
    const newArray = [];
    item?.order?.map((row) =>
        newArray.push({
            Composition: row?.product?.composition
            // "Status  ":OrderStatusColor(row?.status?.toLowerCase()),
        })
    );
    // console.log(newArray,'newArray')
    return newArray;
};

export const handleCSvData = (item) => {
    const newArray = [];
    item?.order?.map((row) =>
        newArray.push({
            "Field Staff": `${row?.user?.firstName} ${row?.user?.lastName}`,
            Customer: row?.customer?.businessName,
            "Prod. Qty": handleTotalQuantity(row?.products),
            Address: row?.customer?.address || "-",
            Status: row?.status,
            "Payment Method": row?.payments[0]?.paymentMethod,
            "Payment Status": row?.paymentStatus,
            Amount: row.total,
            "Order Date": moment(row?.createdAt).format("MMM Do YY"),
            "Business Name": row?.businessName
        })
    );
    // console.log(newArray,'newArray')
    return newArray;
};

export const NumberTable = (item, name) => {
    // console.log(item,'result')
    const index = item?.findIndex((object) => {
        // console.log(object._id, name,'result')
        return object?.id === name;
    });

    // console.log(index,item,'result'); // 👉️ 1
    return index ? index + 1 : 1;
};

export const HeaderOrder = (
    setOrderData,
    setShow,
    setSupplierDetail,
    dataOrders,
    setProductData,
    setShowProduct,
    isSalesReport = false
) => {
    const { AcceptOrderFunc, RejectOrderFunc } = useAuth();

    let columns = [];

    if (isSalesReport) {
        columns = [
            {
                name: "No.",
                selector: (row, index) => (
                    <span>{NumberTable(dataOrders?.order, row?.id)}</span>
                ),
                width: "70px"
            },
            {
                name: "Order Date",
                selector: (row) => (
                    <span>{moment(row?.createdAt).format("MMM Do, YY")}</span>
                ),
                width: "150px"
            },
            {
                name: "Field Staff ",
                selector: (row) => (
                    <span>{`${row?.user?.firstName} ${row?.user?.lastName}`}</span>
                ),
                width: "160px"
            },
            {
                name: "Customer ",
                selector: (row) => (
                    <span>{`${row?.customer?.businessName || "-"}`}</span>
                ),
                width: "200px"
            },

            {
                name: "Prod. Qty",
                selector: (row) => <span>{row?.orderItems[0].quantity}</span>,
                width: "100px"
            },

            {
                name: "Amount (₦)",
                selector: (row) => <span>{formatMoney(row.total)}</span>,
                width: "200px"
            }
        ];
    } else {
        columns = [
            {
                name: "No.",
                selector: (row, index) => (
                    <span>{NumberTable(dataOrders?.order, row?.id)}</span>
                ),
                width: "70px"
            },

            {
                name: "Field Staff ",
                selector: (row) => (
                    <span>{`${row?.user?.firstName} ${row?.user?.lastName}`}</span>
                ),
                width: "160px"
            },
            {
                name: "Customer ",
                selector: (row) => (
                    <span
                        className="video px-2 bg-secondary text-white "
                        onClick={() => {
                            setProductData(row?.orderItems);
                            setShowProduct(true);
                            setSupplierDetail(row);
                        }}
                    >{`${row?.customer?.businessName || "-"}`}</span>
                ),
                width: "200px"
            },

            {
                name: "Prod. Qty",
                selector: (row) => row?.orderItems[0].quantity
            },
            {
                name: "Address",
                selector: (row) => (
                    <span>{`${row?.customer?.address || "-"}`}</span>
                ),
                width: "200px"
            },
            {
                name: "Status  ",
                selector: (row) => (
                    <span
                        className={`fw-2 ${OrderStatusColor(
                            row?.status?.toLowerCase()
                        )}`}
                    >
                        {row?.status}
                    </span>
                ),
                width: "150px"
            },

            {
                name: "Payment Method",
                selector: (row) => (
                    <span>{`${row?.payments[0]?.paymentMethod || "-"}`}</span>
                ),
                width: "150px"
            },

            {
                name: "Payment Status",
                selector: (row) => (
                    <span>{`${row?.paymentStatus || "-"}`}</span>
                ),
                width: "150px"
            },

            {
                name: "Due Date",
                selector: (row) =>
                    moment(row?.order?.payLaterDate).format("MMM Do, YY"),
                width: "150px"
            },

            {
                name: "Amount (₦)",
                selector: (row) => (
                    <span className="text-nowrap">
                        {formatMoney(row.total)}
                    </span>
                ),
                width: "150px"
            },

            {
                name: "Order Date",
                selector: (row) => moment(row?.createdAt).format("MMM Do YY")
            },

            {
                name: "Actions",
                selector: (row) => row.authorized,
                cell: (row) => (
                    <Dropdown>
                        <Dropdown.Toggle className="dropdown-6 text-black border text-muted">
                            ...
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item
                                onClick={() => {
                                    setProductData(row?.orderItems);
                                    setShowProduct(true);
                                    setSupplierDetail(row);
                                    // setShow(true);
                                    // setOrderData([row]);
                                    // setSupplierDetail(row);
                                    // setEditShow(true);
                                    // setEditProduct(row);
                                    // setDeleteProduct(false);
                                }}
                            >
                                View Order
                            </Dropdown.Item>
                            <Dropdown.Item
                                onClick={() => {
                                    AcceptOrderFunc(row?.id);
                                    console.log(row?.order?._id, "orderData");
                                    // setEditShow(true);
                                    // setEditProduct(row);
                                    // setDeleteProduct(false);
                                }}
                            >
                                Approve Order
                            </Dropdown.Item>

                            <Dropdown.Item
                                onClick={() => {
                                    RejectOrderFunc(row?.id);
                                    // setDeleteProduct(true);
                                    // setEditProduct(row);
                                    // setEditShow(false);
                                }}
                            >
                                Decline Order
                            </Dropdown.Item>

                            {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                        </Dropdown.Menu>
                    </Dropdown>
                )
            }
        ];
    }

    return columns;
};

export const SchedularHeader = (DropDownItems, visitationSchedules) => {
    const columns = [
        {
            name: "No.",
            selector: (row, index) => (
                <span>{NumberTable(visitationSchedules, row?.id)}</span>
            )
        },

        {
            name: "Scheduled Date ",
            selector: (row) => (
                <span>{moment(row?.scheduleDate).format("MMM Do, YY")}</span>
            )
        },
        {
            name: "Customer ",
            selector: (row) => row?.customer?.businessName
        },

        {
            name: "Reason For Visitation",
            selector: (row) => row?.visitationReason
        },
        {
            name: "Actions",
            selector: (row) => row.authorized,
            cell: (row) => (
                <Dropdown>
                    <Dropdown.Toggle className="dropdown-6 text-black border text-muted">
                        ...
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {DropDownItems?.map((item) => (
                            <Dropdown.Item
                                onClick={() => {
                                    item?.onClick(row);
                                }}
                            >
                                {item?.name}
                            </Dropdown.Item>
                        ))}
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
    ];

    return columns;
};
export const DailyVisitHeader = (DropDownItems) => {
    const columns = [
        {
            name: "No.",
            selector: (row, index) => row?.id
            // <span>{NumberTable(dataOrders?.order,row?._id)}</span>
        },

        {
            name: "Field Staff ",
            selector: (row) => <span>{row?.field}</span>
        },
        {
            name: "First Visit At ",
            selector: (row) => row?.firstVisitDate
        },
        {
            name: "Last Visit At",
            selector: (row) => row?.LastVisitDate
        },
        {
            name: "Battery Level",
            selector: (row) => row?.batteryLevel
        },

        {
            name: "Refresh At?",
            selector: (row) => row?.refreshAt
        },
        {
            name: "Actions",
            selector: (row) => row.authorized,
            cell: (row) => (
                <Dropdown>
                    <Dropdown.Toggle className="dropdown-6 text-black border text-muted">
                        ...
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {DropDownItems?.map((item) => (
                            <Dropdown.Item
                                onClick={() => {
                                    item?.onClick(row);
                                }}
                            >
                                {item?.name}
                            </Dropdown.Item>
                        ))}
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
    ];

    return columns;
};
export const DailyVisitHeaderFull = (DropDownItems) => {
    const columns = [
        {
            name: "Customer",
            selector: (row, index) => row?.customer
            // <span>{NumberTable(dataOrders?.order,row?._id)}</span>
        },

        {
            name: "Date",
            selector: (row) => <span>{row?.date}</span>
        },
        {
            name: "Check-In Time",
            selector: (row) => row?.checkIn
        },
        {
            name: "Check-Out Time",
            selector: (row) => row?.checkOut
        },
        {
            name: "Duration",
            selector: (row) => row?.duration
        },

        {
            name: "Reason For Visitation",
            selector: (row) => row?.refreshAt
        }
        // {
        //     name: "Actions",
        //     selector: (row) => row.authorized,
        //     cell: (row) => (
        //         <Dropdown>
        //             <Dropdown.Toggle className="dropdown-6 text-black border text-muted">
        //                 ...
        //             </Dropdown.Toggle>

        //             <Dropdown.Menu>
        //                 {DropDownItems?.map((item)=>
        //                 <Dropdown.Item
        //                 onClick={() => {
        //                     item?.onClick(row)
        //                 }}
        //             >
        //                 {item?.name}
        //             </Dropdown.Item>
        //                 )}
        //                 {/* <Dropdown.Item
        //                     onClick={() => {

        //                     }}
        //                 >
        //                     Edit
        //                 </Dropdown.Item> */}

        //                 {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
        //             </Dropdown.Menu>
        //         </Dropdown>
        //     )
        // }
    ];

    return columns;
};
export const SchedularData = () => {
    return [
        {
            id: 1,
            date: "3rd of may, 2022",
            customer: "ABC Pharmacy",
            reason: "Expiration date",
            dailyVist: [
                {
                    id: 1,
                    field: "Gideon Olasupo",
                    totalVisit: 3,
                    firstVisitDate: "3rd of may, 2022",
                    LastVisitDate: "3rd of Sept, 2022",
                    batteryLevel: "13%",
                    refreshAt: "5 mins ago",
                    customer: "ABC Pharmacy",
                    date: "27th of May 2022",
                    checkIn: "2:20PM",
                    checkOut: "2:30PM",
                    duration: "10 Minutes",
                    reason: "Expiration Date"
                },
                {
                    id: 2,
                    field: "Ade Wale",
                    totalVist: 3,
                    firstVisitDate: "3rd of Apr, 2022",
                    LastVisitDate: "3rd of Nov, 2022",
                    batteryLevel: "13%",
                    refreshAt: "5 mins ago",
                    customer: "ABC Pharmacy",
                    date: "27th of May 2022",
                    checkIn: "2:20PM",
                    checkOut: "2:30PM",
                    duration: "10 Minutes",
                    reason: "Expiration Date"
                },
                {
                    id: 3,
                    field: "Emeka ",
                    totalVist: 3,
                    firstVisitDate: "12th of may, 2022",
                    LastVisitDate: "2nd of Aug, 2022",
                    batteryLevel: "13%",
                    refreshAt: "5 mins ago",
                    customer: "ABC Pharmacy",
                    date: "27th of May 2022",
                    checkIn: "2:20PM",
                    checkOut: "2:30PM",
                    duration: "10 Minutes",
                    reason: "Expiration Date"
                }
            ]
        },
        {
            id: 2,
            date: "3rd of may, 2022",
            customer: "ABC Pharmacy",
            reason: "Expiration date",
            dailyVist: [
                {
                    id: 1,
                    field: "Emeka ",
                    totalVist: 3,
                    firstVisitDate: "12th of may, 2022",
                    LastVisitDate: "2nd of Aug, 2022",
                    batteryLevel: "13%",
                    refreshAt: "5 mins ago",
                    customer: "ABC Pharmacy",
                    date: "27th of May 2022",
                    checkIn: "2:20PM",
                    checkOut: "2:30PM",
                    duration: "10 Minutes",
                    reason: "Expiration Date"
                },
                {
                    id: 2,
                    field: "Ade Wale",
                    totalVist: 3,
                    firstVisitDate: "3rd of Apr, 2022",
                    LastVisitDate: "3rd of Nov, 2022",
                    batteryLevel: "13%",
                    refreshAt: "5 mins ago",
                    customer: "ABC Pharmacy",
                    date: "27th of May 2022",
                    checkIn: "2:20PM",
                    checkOut: "2:30PM",
                    duration: "10 Minutes",
                    reason: "Expiration Date"
                },
                {
                    id: 3,

                    field: "Gideon Olasupo",
                    totalVist: 3,
                    firstVisitDate: "3rd of may, 2022",
                    LastVisitDate: "3rd of Sept, 2022",
                    batteryLevel: "13%",
                    refreshAt: "5 mins ago",
                    customer: "ABC Pharmacy",
                    date: "27th of May 2022",
                    checkIn: "2:20PM",
                    checkOut: "2:30PM",
                    duration: "10 Minutes",
                    reason: "Expiration Date"
                }
            ]
        },
        {
            id: 3,
            date: "3rd of may, 2022",
            customer: "ABC Pharmacy",
            reason: "Expiration date"
        },
        {
            id: 4,
            date: "3rd of may, 2022",
            customer: "ABC Pharmacy",
            reason: "Expiration date"
        }
    ];
};

export const ProductColumn = [
    // {
    //     name: "#",
    //     selector: (row) => console.log(row.length, "row")
    // },
    {
        name: "No.",
        selector: (row, index) => <span>{index + 1}</span>,
        width: "80px"
    },

    {
        name: "Product",
        selector: (row) => (
            <span className="text-uppercase">{`${
                row?.product?.productName || "-"
            }`}</span>
        )
    },

    {
        name: "Composition",
        selector: (row) => (
            <span className="text-uppercase">{`${
                row?.product?.composition || "-"
            }`}</span>
        )
    },
    {
        name: "Qty",
        selector: (row) => row?.quantity
    },
    {
        name: "Unit Price (₦)",
        selector: (row) => <span>{formatMoney(row?.product?.costPerUnit)}</span>
    },
    {
        name: "Sample Qty",
        selector: (row) => row?.products?.sampleQuantity || "-"
    },
    {
        name: "Return Qty",
        selector: (row) => row?.products?.returnQuantity || "-"
    },
    {
        name: "Replace Qty",
        selector: (row) => row?.products?.replacementQuantity || "-"
        // width: "200px"
    },

    {
        name: "Total (₦)",
        selector: (row) => <span>{formatMoney(row?.price)}</span>
    }
];
