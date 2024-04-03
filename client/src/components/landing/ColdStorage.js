import React, { useState } from 'react';
import MainNavbar from './MainNavbar';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import "../../styles/ColdStorage.css"

const ColdStorage = (props) => {
    // Array of new cold storage locations including Jalochi and Shikrapur
    const coldStorageLocations = [
        { id: 1, name: 'Cold Storage Mumbai', lat: 19.224286645107405, lng: 73.02886975040192, details: 'Mumbai location details' },
        { id: 2, name: 'Cold Storage Kurli', lat: 18.802760763335005, lng: 73.8427853201517, details: 'Kurli location details' },
        { id: 3, name: 'Cold Storage Wai', lat: 18.184344830058187, lng: 73.91170382217533, details: 'Wai location details' },
        { id: 4, name: 'Cold Storage Ganeshwadi', lat: 17.77680487318701, lng: 74.41707492921616, details: 'Ganeshwadi location details' },
        { id: 5, name: 'Cold Storage Kolhapur', lat: 16.83280391267412, lng: 74.28523898824898, details: 'Kolhapur location details' },
        { id: 6, name: 'Cold Storage Chandrapur', lat: 20.24938235144244, lng: 79.24973044394945, details: 'Chandrapur location details' },
        { id: 7, name: 'Cold Storage Nagpur', lat: 21.166003300161314, lng: 79.19386621928413, details: 'Nagpur location details' },
        { id: 8, name: 'Cold Storage Jalochi', lat: 18.21949071924498, lng: 74.59442577014593, details: 'Jalochi location details' }, // Jalochi coordinates
        { id: 9, name: 'Cold Storage Shikrapur', lat: 18.854882855932416, lng: 74.11102731993294, details: 'Shikrapur location details' }, // Shikrapur coordinates
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
            <div className='Map-window'>
                <h1 className='cold-storage-heading'>Cold Storage Locations</h1>
                <div className='ColdStorageMap'>
                    <Map
                        google={props.google}
                        zoom={8} // Adjust zoom level as needed
                        initialCenter={{ lat: 19.224286645107405, lng: 73.02886975040192 }} // Initial center (Mumbai coordinates)
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