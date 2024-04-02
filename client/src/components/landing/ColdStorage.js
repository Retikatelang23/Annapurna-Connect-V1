// ColdStorage.js

import React, { useState } from 'react';
import MainNavbar from './MainNavbar';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
// import './ColdStorage.css'; // Import CSS file for styling

const ColdStorage = (props) => {
    // Array of new cold storage locations
    const coldStorageLocations = [
        { id: 1, name: 'Cold Storage Jalgaon', lat: 21.191605104979608, lng: 75.56816914861304, details: 'Jalgaon location details' }, // Jalgaon coordinates
        { id: 2, name: 'Cold Storage Varhane', lat: 20.745198118681103, lng: 74.50035104532883, details: 'Varhane location details' }, // Varhane coordinates
        { id: 3, name: 'Cold Storage Navi Mumbai', lat: 19.286517021420465, lng: 73.00689709357405, details: 'Navi Mumbai location details' }, // Navi Mumbai coordinates
        // Add more cold storage locations here if needed
    ];

    const [activeMarker, setActiveMarker] = useState(null);
    const [showInfoWindow, setShowInfoWindow] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(null);

    const onMarkerClick = (markerProps, marker) => {
        setActiveMarker(marker);
        setShowInfoWindow(true);
        setSelectedLocation(markerProps);
    };

    const onCloseInfoWindow = () => {
        setActiveMarker(null);
        setShowInfoWindow(false);
        setSelectedLocation(null);
    };

    return (
        <div>
            <MainNavbar />
            <div className='MapBhaisahab'>
                <h1>Cold Storage Locations</h1>
                <div className='ColdStorageMap'>
                    <Map
                        google={props.google}
                        zoom={8} // Adjust zoom level as needed
                        initialCenter={{ lat: 21.191605104979608, lng: 75.56816914861304 }} // Initial center (Jalgaon coordinates)
                    >
                        {/* Add Marker for each cold storage location */}
                        {coldStorageLocations.map(location => (
                            <Marker
                                key={location.id}
                                position={{ lat: location.lat, lng: location.lng }}
                                title={location.name}
                                onClick={onMarkerClick}
                            />
                        ))}

                        {/* InfoWindow for displaying location details */}
                        <InfoWindow
                            marker={activeMarker}
                            visible={showInfoWindow}
                            onClose={onCloseInfoWindow}
                        >
                            <div>
                                <h3>{selectedLocation && selectedLocation.name}</h3>
                                <p>{selectedLocation && selectedLocation.details}</p>
                            </div>
                        </InfoWindow>
                    </Map>
                </div>
            </div>
        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDNhIiLLtHbil2lqkwY5vIRaa8OfyJLe2A' // Replace with your actual API key
})(ColdStorage);
