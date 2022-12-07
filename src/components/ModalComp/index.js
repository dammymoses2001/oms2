import React from "react";
import { Modal } from "react-bootstrap";

export const ModalComp = ({
    size,
    show = false,
    handleClose = false,
    bodyText,
    title
}) => {
    console.log("show", show);
    return (
        <div>
            <Modal
                show={show}
                onHide={() => handleClose(false)}
                size={size ? size : "lg"}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className="text-muted h6">{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{bodyText}</Modal.Body>
                {/* <Modal.Footer>
         
        </Modal.Footer> */}
            </Modal>
        </div>
    );
};

export const GetPage = ({ arrayComp = [], setPageNo = 0 }) => {
    return (
        <div>
            <div>
                {arrayComp.length > 0 ? arrayComp[setPageNo]?.component : null}
            </div>
        </div>
    );
};
