import { Link } from "react-router-dom";
import { formatMoney } from "../../utils";
import { checkStock } from "../../utils/datautils";
import { ModalComp } from "../ModalComp";
import { TableCompData } from "../Table";
import { CSVLink, CSVDownload } from "react-csv";
import { TableComp } from "../TableComp";

// add dataorder

export const topProductHeader = [
    { name: "PRODUCT NAME" },
    { name: "Product SKU" },
    { name: "AVAILABILITY" },
    { name: "TOTAL" },
    { name: "QUANTITY" }
];

export const ProductModal = ({ show, productData, setShow }) => {
    console.log(productData);

    const bodyData = () => {
        return productData.map((item, index) => {
            // if(index<=4){
            return (
                <tr key={index}>
                    <td>
                        <div className="row align-items-center">
                            {/* <div className="col-sm-3">
                                <div className="productWrapper ">
                                    <img src={Product1} alt="" />{" "}
                                </div>
                            </div> */}
                            <div className="col-sm-6">
                                <span>{item?.product.productName}</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <span className="d-flex align-items-center h-100">
                            {item?.product.productSku}
                        </span>
                    </td>
                    <td>
                        {" "}
                        <div className="d-flex  align-items-center h-100">
                            <span
                                className={`border px-2 py-1 rounded small  text-white text-center ${checkStock(
                                    200
                                )}`}
                            >
                                {200} In Stock
                            </span>
                        </div>
                    </td>
                    <td>
                        <div className="d-flex align-items-center h-100">
                            <span className="">
                                NGN {formatMoney(item?.product.costPerUnit)}
                            </span>
                        </div>
                    </td>
                    <td>
                        <div className="d-flex align-items-center h-100">
                            <span className="">{item?.quantity}</span>
                        </div>
                    </td>
                </tr>
            );
            // }
            // return null
        });
    };

    return (
        <ModalComp
            size={"xl"}
            title={<h5>Order List</h5>}
            show={show}
            handleClose={setShow}
            bodyText={
                <div>
                    {/* <div className="mb-3 px-3 ">
                        <CSVLink
                            filename={"Order List"}
                            data={handleProductData(orderData)}
                            headers={headers}
                        >
                            <button className=" px-3 pl-4  py-1 bg bg-1 h-6 ml-4 btn1">
                                {" "}
                                Export{" "}
                            </button>
                        </CSVLink>
                    </div> */}

                    <div className="px-3 mb-3">
                        {/* <TableCompData
                            columns={HeaderOrder(setShow)}
                            data={orderData}
                            // columns={ProductColumn}
                        /> */}
                        <TableComp
                            TableHeader={topProductHeader}
                            TableBodyData={bodyData}
                            data={productData}
                        />
                    </div>

                    <div className="mb-5 text-end me-3 d-flex justify-content-end">
                        Total:{" "}
                        <h5 className="text-decoration-underline fw-bolder ms-1">
                            {" "}
                            N
                            {formatMoney(
                                parseFloat(productData[0].product.costPerUnit) *
                                    parseFloat(productData[0].quantity)
                            )}
                        </h5>
                    </div>

                    {/* {orderData?.status !== "ACCEPTED" ? (
                        <div className="text-end">
                            <button
                                className="btn bg-8 me-4 px-4"
                                onClick={() => {
                                    // RejectOrderFunc(supplierDetail?._id);
                                    setDeclineModal(true);
                                }}
                            >
                                Decline
                            </button>
                            <button
                                className="btn bg-6 text-white me-4 px-4"
                                onClick={() => {
                                    console.log(orderData, "orderData");
                                    AcceptOrderFunc(supplierDetail?.id);
                                    setShow(false);
                                }}
                            >
                                Approve
                            </button>
                        </div>
                    ) : (
                        <div className="text-end">
                            <Link
                                to={`/invoice/${orderData?.id}`}
                                className="px-4 btn bg-6 text-white"
                            >
                                View Invoice
                            </Link>
                        </div>
                    )} */}
                </div>
            }
        />
    );
};

export const OrderProductModal = ({
    declineModal,
    setDeclineModal,
    setRejectReason,
    setShow,
    RejectOrderFunc,
    supplierDetail,
    rejectReason
}) => {
    return (
        <ModalComp
            show={declineModal}
            handleClose={() => setDeclineModal(false)}
            title={<h4>Decline Order</h4>}
            bodyText={
                <div className="py-3">
                    <h5 className="mb-3">
                        Why Do you want to reject this order?
                    </h5>
                    <div>
                        <div class="form-group mb-4">
                            <textarea
                                class="form-control"
                                id="exampleFormControlTextarea1"
                                rows="2"
                                onChange={(e) =>
                                    setRejectReason(e.target.value)
                                }
                            ></textarea>
                        </div>
                        <div>
                            <div className="text-end">
                                <button
                                    className="btn bg-8 me-4 px-4"
                                    onClick={() => {
                                        setDeclineModal(false);
                                        setShow(false);
                                    }}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="btn bg-6 text-white me-4 px-4"
                                    onClick={() => {
                                        RejectOrderFunc(supplierDetail?._id, {
                                            reasonDeclined: rejectReason
                                        });
                                    }}
                                >
                                    Decline
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        />
    );
};
