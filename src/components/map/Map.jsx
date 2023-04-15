import React, { useMemo } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const SimpleMap1 = ({ locationsArray = [] }) => {
   

    const locations = [
        { lat: 37, lng: -122 },

        { lat: 37, lng: -122 },
        { lat: 37, lng: -122 },
        { lat: 37, lng: -122 },
        { lat: 6, lng: 3 } // Chicago
        // Add more locations as needed
    ];

    const expensiveResult = useMemo(() => {
        const result = locationsArray?.map((item) => ({
            lat: parseInt(item?.latitude),
            lng: parseInt(item?.longitude),
            color:item?.status==="Arrived"?'green':'red'
        }));
        return result;
    }, [locationsArray]);

    // console.log(expensiveResult, "locationsArray");
    //   latitude
    // :
    // "37.785834"
    // longitude
    // :
    // "-122.406417"

    return (
        expensiveResult?.length > 1 ? (
            <LoadScript googleMapsApiKey="AIzaSyADb8PSKrM-CcKxd2iab2QIH4LTIjmI3aM">
                <GoogleMap
                    center={expensiveResult[2]||locations[2]} // Set initial map center
                    zoom={4} // Set initial zoom level
                    mapContainerStyle={{ height: "400px", width: "100%" }} // Set map container style
                >
                    {/* Render markers for each location */}
                    {expensiveResult?.map((location, index) => (
                        <Marker key={index} position={location}
                        icon={{
                            url: `https://maps.google.com/mapfiles/ms/icons/${location.color}-dot.png`,
                          }}
                        />
                    ))}
                </GoogleMap>
            </LoadScript>):
            <LoadScript googleMapsApiKey="AIzaSyADb8PSKrM-CcKxd2iab2QIH4LTIjmI3aM">
            <GoogleMap
                center={locations[2]} // Set initial map center
                zoom={4} // Set initial zoom level
                mapContainerStyle={{ height: "400px", width: "100%" }} // Set map container style
            >
                {/* Render markers for each location */}
                {locations?.map((location, index) => (
                    <Marker key={index} position={location} />
                ))}
            </GoogleMap>
        </LoadScript>
        
    );
};

export default SimpleMap1;
