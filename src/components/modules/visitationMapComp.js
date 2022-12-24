import { ModalComp } from "../ModalComp";

import GoogleMapReact from "google-map-react";

const Marker = ({ text }) => (
    <div>
        <strong>{text}</strong>
    </div>
);

export default function SimpleMap() {
    const defaultProps = {
        center: { lat: 11.99835602, lng: 10.01502627 }
    };

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: "100vh", width: "100%" }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <Marker text="<<Here>>" />
            </GoogleMapReact>
        </div>
    );
}

export const VisitationMapModal = ({ show, visitCoords, setShow }) => {
    return (
        <ModalComp
            size={"xl"}
            title={<h5>Order List</h5>}
            show={show}
            handleClose={setShow}
            bodyText={
                <>
                    {visitCoords ? (
                        <SimpleMap />
                    ) : (
                        <div>
                            <div className="p-4 text-center">
                                Not visited yet. No coordinates to show.
                            </div>
                        </div>
                    )}
                </>
            }
        />
    );
};
