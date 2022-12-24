import moment from "moment";
import { formatMoney } from "../../utils";
import { checkStock } from "../../utils/datautils";
import { ModalComp } from "../ModalComp";
import { TableCompData } from "../Table";
import { TableComp } from "../TableComp";

// add dataorder

export const VisitationModal = ({ show, visitData, setShow }) => {
    console.log("ll", visitData);

    const bodyData = () => {
        return visitData.map((item, index) => {
            // if(index<=4){
            return (
                <tr key={index}>
                    <td>
                        <div className="row align-items-center">
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
                    <div className="px-3 mb-3">
                        <strong>Visitation ID:</strong> {visitData?.id}
                    </div>
                    <div className="px-3 mb-3">
                        <strong>Visitation Date:</strong>{" "}
                        {moment(visitData?.scheduleDate).format("MMM Do, YY")}
                    </div>
                    <div className="px-3 mb-3">
                        <strong>Visitation Reason:</strong>{" "}
                        {visitData?.visitationReason}
                    </div>
                    <div className="px-3 mb-3">
                        <strong>Business Name:</strong>{" "}
                        {visitData?.customer?.businessName}
                    </div>
                    <div className="px-3 mb-3">
                        <strong>Address:</strong> {visitData?.customer?.address}
                    </div>
                    <div className="px-3 mb-3">
                        <strong>Business Phone Number:</strong>{" "}
                        {visitData?.customer?.businessPhoneNumber}
                    </div>

                    {/* <div className="mb-5 text-end me-3 d-flex justify-content-end">
                        Total:{" "}
                        <h5 className="text-decoration-underline fw-bolder ms-1">
                            {" "}
                            N
                            {formatMoney(
                                parseFloat(visitData[0].product.costPerUnit) *
                                    parseFloat(visitData[0].quantity)
                            )}
                        </h5>
                    </div> */}

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
