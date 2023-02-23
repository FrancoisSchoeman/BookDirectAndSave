import { useState, useEffect, memo, useCallback } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// TODO: Move to .env
const googleMapsAPIKey = "AIzaSyCezd6t3424wEvqTQWxcjhNZd64YDkpPZ0";


export default function MyGoogleMaps({ center, zoom, mapMargin, children }) {

    const containerStyle = {
        width: '100%',
        height: '450px',
        margin: mapMargin,
        zIndex: "10"
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: googleMapsAPIKey
    })

    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map) {
        map.setZoom(zoom);
        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])



    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={zoom}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */}
            <>{children}</>
        </GoogleMap>
    ) : <></>
}


