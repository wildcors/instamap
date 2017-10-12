import React from 'react'
import GoogleMapReact from 'google-map-react'

const Map = ({ center, zoom, onClick }) => {
    return (
        <GoogleMapReact
            bootstrapURLKeys={{
                key: 'AIzaSyBkFf2l_JxoH4wxYRCDtvCImy3Znec9RmA',
                language: 'en'
            }}
            defaultCenter={center}
            defaultZoom={zoom}
            onClick={onClick} 
        />
    )
}

Map.defaultProps = {
    center: { lat: 50.44, lng: 30.54 },
    zoom: 10
}

export default Map;