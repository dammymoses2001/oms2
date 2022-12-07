import { Link } from "react-router-dom";
import { formatMoney } from "../../utils";
import { handleProductData } from "../../utils/datautils";
import { ModalComp } from "../ModalComp";
import { TableCompData } from "../Table";
import { CSVLink, CSVDownload } from "react-csv";

// add dataorder

export const OrderModal = ({
    show,
    orderData,
    setShow,
    ProductColumn,
    setDeclineModal,
    supplierDetail,
    AcceptOrderFunc
}) => {
    console.log("Opended Modal", show);
    const headers = [
        { label: "Product", key: "Product" },
        { label: "", key: "" },
        { label: "Composition", key: "Composition" },
        { label: "", key: "" },
        { label: "Quantity ", key: "Quantity" },
        { label: "Unit price ", key: "Unit price" },
        { label: "Sample Qty ", key: " Sample Qty" },
        { label: "Return Qty", key: " Return Qty" },
        { label: "Replace Qty ", key: " Replace Qty" },
        { label: "Total ", key: "Total" }
    ];

    return (
        <ModalComp
            size={"xl"}
            title={<h5>Order List</h5>}
            show={show && orderData}
            handleClose={setShow}
            bodyText={
                <div>
                    <div className="mb-3 px-3 ">
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
                    </div>

                    <div className="px-3 mb-3">
                        <TableCompData
                            data={orderData}
                            columns={ProductColumn}
                        />
                    </div>

                    <div className="mb-5 text-end me-3 d-flex justify-content-end">
                        Total:{" "}
                        <h5 className="text-decoration-underline fw-bolder ms-1">
                            {" "}
                            N{formatMoney(supplierDetail?.subTotal)}
                        </h5>
                    </div>
                    {orderData?.status !== "ACCEPTED" ? (
                        <div className="text-end">
                            <button
                                className="btn bg-8 me-4 px-4"
                                onClick={() => {
                                    // RejectOrderFunc(supplierDetail?._id);
                                    setDeclineModal(true);
                                    setShow(false);
                                }}
                            >
                                Decline
                            </button>
                            <button
                                className="btn bg-6 text-white me-4 px-4"
                                onClick={() => {
                                    console.log(orderData, "orderData");
                                    AcceptOrderFunc(supplierDetail?._id);
                                    setShow(false);
                                }}
                            >
                                Approve
                            </button>
                        </div>
                    ) : (
                        <div className="text-end">
                            <Link
                                to={`/invoice/${orderData?._id}`}
                                className="px-4 btn bg-6 text-white"
                            >
                                View Invoice
                            </Link>
                        </div>
                    )}
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
